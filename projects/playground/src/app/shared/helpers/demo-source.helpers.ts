import type { ICodeFile } from '@playground/interfaces/icode-file.interface';
import type { IDemoProperty } from '@playground/interfaces/idemo-property.interface';
import type { IDemoStory } from '@playground/interfaces/idemo-story.interface';
import type { DemoArgs } from '@playground/types/demo.types';

/** Serialize values as TypeScript without treating user-entered content as code. */
export function serializeDemoValue(value: unknown, depth: number = 0): string {
  if (value === undefined) return 'undefined';

  if (value instanceof Date) return `new Date(${JSON.stringify(value.toISOString())})`;

  if (Array.isArray(value)) return `[${value.map((item) => serializeDemoValue(item, depth + 1)).join(', ')}]`;

  if (value !== null && typeof value === 'object') {
    const indent = '  '.repeat(depth + 1);

    return `{\n${Object.entries(value)
      .map(([key, item]) => `${indent}${key === '__proto__' ? `[${JSON.stringify(key)}]` : JSON.stringify(key)}: ${serializeDemoValue(item, depth + 1)}`)
      .join(',\n')}\n${'  '.repeat(depth)}}`;
  }

  return JSON.stringify(value) ?? 'undefined';
}

/** Build consumer code from the active configuration without exporting workbench instrumentation. */
export function demoSourceFiles(story: IDemoStory, args: DemoArgs): ICodeFile[] {
  if (story.adapter) return serviceSourceFiles(story.adapter, args);

  let template = story.template;

  for (const property of story.properties) {
    if (
      property.ownerType ||
      property.path ||
      property.kind === 'model' ||
      property.required ||
      property.editor === 'documentation' ||
      property.binding.startsWith('bx')
    )
      continue;

    if (serializeDemoValue(args[property.name]) !== serializeDemoValue(property.defaultValue)) continue;

    template = template.replace(`[${property.binding}]="args().${property.name}"`, '');
  }

  template = template.replace(/\(([\w.-]+)\)="onAction\('([^']+)', \$event\)"/g, (_match: string, binding: string, event: string) => {
    const model = story.properties.find(
      (property) => property.kind === 'model' && property.editor !== 'documentation' && `${property.binding}Change` === event
    );

    return model ? `(${binding})="${model.name}.set($event)"` : '';
  });

  template = template
    .replace(/\([\w.-]+\)="onAction\('([^']+)', (true|false)\)"/g, (_match: string, event: string, value: string) => {
      const model = story.properties.find((property) => property.kind === 'model' && `${property.binding}Change` === event);

      return model ? `(${event})="${model.name}.set(${value})"` : '';
    })
    .replace(/\([\w.-]+\)="onAction\('[^']+', formModel\(\)\)"/g, '');

  template = template
    .replace(/onAction\('([^']+)', (!?args\(\)\.\w+)\)/g, (match: string, event: string, expression: string) => {
      const model = story.properties.find((property) => property.kind === 'model' && `${property.binding}Change` === event);

      return model ? `${model.name}.set(${expression})` : match;
    })
    .replace(/onAction\('[^']+', \$event\);\s*/g, '');

  const used = new Set([...template.matchAll(/args\(\)\.(\w+)/g)].map((match) => match[1]));
  const fields = story.properties
    .filter((property) => used.has(property.name))
    .map((property) => {
      const type = consumerValueType(story, property, args[property.name]);
      const value = args[property.name];
      const group =
        value === null
          ? 'nullable'
          : typeof value === 'number' && value < 0
            ? 'value'
            : ['string', 'number', 'boolean'].includes(typeof value)
              ? typeof value
              : 'value';

      return { group, source: `public readonly ${property.name}: WritableSignal<${type}> = signal<${type}>(${serializeDemoValue(value, 1)});` };
    });

  template =
    template
      .replace(/>\s*</g, '>\n<')
      .replace(/args\(\)\.(\w+)/g, '$1()')
      .split('\n')
      .filter((line) => line.trim())
      .join('\n') + '\n';

  const declarations = fields.map((field, index) => `${index && field.group !== fields[index - 1].group ? '\n' : ''}${field.source}`).join('\n');

  let source = story.source.replace(/public readonly __FIELDS__: WritableSignal<unknown> = signal<unknown>\(undefined\);/, () => declarations);

  if (!fields.length && story.id !== 'signal-forms')
    source = source.replace("import type { WritableSignal } from '@angular/core';\n", '').replace(', signal', '');

  source = source.replace(/;\n@Component/g, ';\n\n@Component');

  source = source.replace(
    /export class Example\s*\{\s*\}/,
    '// eslint-disable-next-line @typescript-eslint/no-extraneous-class -- Angular requires a component class for this template.\nexport class Example {}'
  );

  return [
    { title: 'example.html', path: 'example.html', language: 'html', content: template },
    { title: 'example.ts', path: 'example.ts', language: 'typescript', content: source },
    ...(story.styles ? [{ title: 'example.scss', path: 'example.scss', language: 'scss' as const, content: story.styles }] : [])
  ];
}

/** Use ordinary Angular state and public input contracts for complex consumer configuration. */
export function consumerValueType(story: IDemoStory, property: IDemoProperty, value: unknown): string {
  if (property.kind === 'model' && ['boolean', 'number', 'string'].includes(property.type)) return property.type;

  if (property.kind === 'model' && story.id !== 'slider')
    return `ReturnType<${property.ownerType ?? story.componentType}['${property.originalName ?? property.name}']>`;

  if (property.editor === 'json' || (property.options?.length ?? 0) > 32)
    return `ReturnType<${property.ownerType ?? story.componentType}['${property.originalName ?? property.name}']>`;

  const base = property.options?.length
    ? property.options.map((item) => JSON.stringify(item)).join(' | ')
    : property.editor === 'boolean'
      ? 'boolean'
      : property.editor === 'number' || typeof value === 'number'
        ? 'number'
        : 'string';

  return [base, ...(property.nullable || value === null ? ['null'] : []), ...(property.optional || value === undefined ? ['undefined'] : [])].join(' | ');
}

/** Export the configured service call and only the content components it actually needs. */
export function serviceSourceFiles(adapter: 'modal' | 'toast', args: DemoArgs): ICodeFile[] {
  const value = (name: string): string => serializeDemoValue(args[name], 3);

  if (adapter === 'toast') {
    const closeLabel =
      ({ en: 'Close notification', es: 'Cerrar notificación', fr: 'Fermer la notification', de: 'Benachrichtigung schließen' } as Record<string, string>)[
        String(args['language'])
      ] ?? 'Close notification';

    return [
      {
        title: 'example.ts',
        path: 'example.ts',
        language: 'typescript',
        content: `import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import type { ISimpleToastData, ToastRef } from '@filip.mazev/blocks/toastr';

import { Button } from '@filip.mazev/blocks/forms';
import { Icon } from '@filip.mazev/blocks/icons';
import { SimpleToast, ToastrGlobalSettingsService, ToastrService } from '@filip.mazev/blocks/toastr';

@Component({
  selector: 'app-example',
  imports: [Button, Icon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<button type="button" bx-button variant="filled" (click)="showNotification()"><bx-icon name="bell" size="16" />Show notification</button>'
})
export class Example {
  private readonly toastrService = inject(ToastrService);
  private readonly toastrGlobalSettingsService = inject(ToastrGlobalSettingsService);

  public showNotification(): ToastRef<ISimpleToastData, undefined> {
    this.toastrGlobalSettingsService.maxOpened.set(${value('maxOpened')});

    return this.toastrService.queueToast<ISimpleToastData, undefined, SimpleToast>(SimpleToast, {
      position: ${value('position')},
      glassiness: ${value('glassiness')},
      glassQuality: ${value('glassQuality')},
      wrapperClass: ${value('wrapperClass')},
      durationInMs: ${value('durationInMs')},
      animate: ${value('animate')},
      swipeToDismiss: ${value('swipeToDismiss')},
      showCloseButton: ${value('showCloseButton')},
      showProgressBar: ${value('showProgressBar')},
      hasDefaultBackground: ${value('hasDefaultBackground')},
      closeButtonColor: ${serializeDemoValue('text-' + args['type'])},
      progressBarColor: ${serializeDemoValue('text-' + args['type'])},
      closeLabel: ${args['closeLabel'] ? value('closeLabel') : serializeDemoValue(closeLabel)},
      data: {
        title: ${value('title')},
        message: ${value('message')},
        type: ${value('type')},
        icon: ${args['icon'] ? `{ name: ${value('icon')} }` : 'null'},
        loading: ${value('loading')}
      }
    });
  }
}
`
      }
    ];
  }

  const guarded = args['hasConfirmCloseGuard'] === true;
  const files: ICodeFile[] = [
    {
      title: 'example.ts',
      path: 'example.ts',
      language: 'typescript',
      content: `import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import type { ModalRef } from '@filip.mazev/blocks/modal';

import { Button } from '@filip.mazev/blocks/forms';
import { Icon } from '@filip.mazev/blocks/icons';
import { ${guarded ? 'ModalConfirmCloseGuard, ' : ''}ModalService } from '@filip.mazev/blocks/modal';

${guarded ? "import { CloseConfirmation } from './close-confirmation';\n" : ''}import { ConfirmationContent } from './confirmation-content';

@Component({
  selector: 'app-example',
  imports: [Button, Icon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<button type="button" bx-button variant="filled" (click)="openModal()"><bx-icon name="app-window" size="16" />Open modal</button>'
})
export class Example {
  private readonly modalService = inject(ModalService);

  public openModal(): ModalRef<string, undefined> {
    return this.modalService.open<string, undefined>(ConfirmationContent, {
      closeLabel: ${value('closeLabel')},
      disableCloseOnNavigation: ${value('disableCloseOnNavigation')},
      closeGuardOnlyOnCancel: ${value('closeGuardOnlyOnCancel')},
      contentStyles: ${value('contentStyles')},
      ariaLabel: ${args['headerText'] ? 'undefined' : value('title')},
      header: { text: ${value('headerText')}, icon: { name: 'info', color: 'text-info', bgColor: 'auto' } },
      data: ${value('title')},
      style: {
        layout: ${value('layout')},
        closeDelay: ${value('closeDelay')},
        contentWrapper: ${value('contentWrapper')},
        wrapperStyles: ${value('wrapperStyles')},
        wrapperClasses: ${value('wrapperClasses')},
        overrideFullHeight: ${value('overrideFullHeight')},
        animate: ${value('animate')},
        hasBackdrop: ${value('hasBackdrop')},
        showCloseButton: ${value('showCloseButton')},
        breakpoints: ${value('breakpoints')}
      },
      disableClose: ${value('disableClose')},
      disableCloseOnBackdropClick: ${value('disableCloseOnBackdropClick')}${guarded ? ",\n      closeGuard: new ModalConfirmCloseGuard<string, undefined>(CloseConfirmation, {\n        data: 'Are you sure you want to close the modal?',\n        header: { text: 'Unsaved changes' },\n        style: { showCloseButton: false }\n      })" : ''}
    });
  }
}
`
    }
  ];

  for (const [name, file] of [['ConfirmationContent', 'confirmation-content'], ...(guarded ? [['CloseConfirmation', 'close-confirmation']] : [])]) {
    files.push({
      title: `${file}.ts`,
      path: `${file}.ts`,
      language: 'typescript',
      content: `import { ChangeDetectionStrategy, Component } from '@angular/core';

import { Button } from '@filip.mazev/blocks/forms';
import { Icon } from '@filip.mazev/blocks/icons';
import { Modal, ModalFooterDirective } from '@filip.mazev/blocks/modal';

@Component({
  selector: 'app-${file}',
  imports: [Button, Icon, ModalFooterDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './${file}.html'
})
export class ${name} extends Modal<string, undefined> {
  public confirm(): void {
    this.modal?.close('confirm');
  }
}
`
    });
    files.push({
      title: `${file}.html`,
      path: `${file}.html`,
      language: 'html',
      content: `<p>{{ data }}</p>
<ng-container *appModalFooter>
    <button type="button" bx-button variant="filled" (click)="confirm()"><bx-icon name="check" size="16" />Confirm</button>
    <button type="button" bx-button variant="tonal" (click)="close()"><bx-icon name="x" size="16" />Cancel</button>
</ng-container>
`
    });
  }

  return files;
}

/** Snapshot event payloads while avoiding circular DOM and framework objects. */
export function describeDemoPayload(payload: unknown): string {
  const seen = new WeakSet<object>();

  return (
    JSON.stringify(
      payload,
      (_key: string, value: unknown) => {
        if (typeof Event !== 'undefined' && value instanceof Event) return { type: value.type, isTrusted: value.isTrusted };

        if (typeof value === 'object' && value !== null) {
          if (seen.has(value)) return '[Circular]';

          seen.add(value);
        }

        if (typeof value === 'bigint') return value.toString();

        if (typeof value === 'function') return '[Function]';

        return value;
      },
      2
    ) ?? 'undefined'
  );
}
