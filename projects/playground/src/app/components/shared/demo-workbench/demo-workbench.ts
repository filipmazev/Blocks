import type { ComponentRef, InputSignal, Signal, TemplateRef, Type, WritableSignal } from '@angular/core';

import { NgTemplateOutlet } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  DestroyRef,
  effect,
  inject,
  input,
  outputBinding,
  signal,
  untracked,
  viewChild,
  ViewContainerRef
} from '@angular/core';

import type { IBxSelectOption } from '@filip.mazev/blocks/forms';
import type { SidePanelBreakpoints } from '@filip.mazev/blocks/primitives';
import type { ICodeFile } from '@playground/interfaces/icode-file.interface';
import type { IDemoAction } from '@playground/interfaces/idemo-action.interface';
import type { IDemoLogEntry } from '@playground/interfaces/idemo-log-entry.interface';
import type { IDemoProperty } from '@playground/interfaces/idemo-property.interface';
import type { IDemoStory } from '@playground/interfaces/idemo-story.interface';
import type { DemoArgs, DemoValue } from '@playground/types/demo.types';

import { WindowDimensionsService } from '@filip.mazev/blocks/core';
import { BxSurfaceDirective } from '@filip.mazev/blocks/effects';
import { Button, Checkbox, InputField, Select } from '@filip.mazev/blocks/forms';
import { Icon } from '@filip.mazev/blocks/icons';
import {
  BottomDrawer,
  Collapsible,
  ResizeHandleDirective,
  SidePanel,
  SidePanelHeaderDirective,
  SidePanelLayout,
  Skeleton,
  Tab,
  TabContentDirective,
  Tabs,
  TooltipDirective
} from '@filip.mazev/blocks/primitives';

import { Code } from '@playground/components/shared/code/code';
import { DEMO_STORIES } from '@playground/generated/demo-stories/constants/demo-stories.constants';
import { demoSourceFiles, describeDemoPayload } from '@playground/shared/helpers/demo-source.helpers';
import { validateDemoConstraints, validateDemoValue } from '@playground/shared/helpers/demo-validation.helpers';

@Component({
  selector: 'app-demo-workbench',
  imports: [
    BottomDrawer,
    NgTemplateOutlet,
    Button,
    Checkbox,
    InputField,
    Select,
    Icon,
    Tabs,
    Tab,
    TabContentDirective,
    BxSurfaceDirective,
    Code,
    Collapsible,
    ResizeHandleDirective,
    Skeleton,
    SidePanel,
    SidePanelHeaderDirective,
    SidePanelLayout,
    TooltipDirective
  ],
  templateUrl: './demo-workbench.html',
  styleUrl: './demo-workbench.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DemoWorkbench {
  private readonly destroyRef = inject(DestroyRef);
  private readonly windowDimensionsService = inject(WindowDimensionsService);

  private readonly loadedComponents: Map<string, Type<unknown>> = new Map();

  private readonly preview: Signal<ViewContainerRef | undefined> = viewChild('preview', { read: ViewContainerRef });

  protected readonly args: WritableSignal<DemoArgs> = signal({});

  protected readonly search: WritableSignal<string> = signal('');

  protected readonly events: WritableSignal<readonly IDemoLogEntry[]> = signal([]);
  protected readonly errors: WritableSignal<Readonly<Record<string, string>>> = signal({});
  protected readonly drafts: WritableSignal<Readonly<Record<string, string>>> = signal({});

  protected readonly loadError: WritableSignal<string> = signal('');

  protected readonly loading: WritableSignal<boolean> = signal(true);

  protected readonly propertiesOpen: WritableSignal<boolean> = signal(!this.windowDimensionsService.isBelow('xl'));

  protected readonly panelWidth: WritableSignal<number | string> = signal<number | string>(480);
  protected readonly resultsHeight: WritableSignal<number> = signal(320);

  protected readonly showLoading: WritableSignal<boolean> = signal(false);

  protected readonly panelBreakpoints: SidePanelBreakpoints = { xl: 'push' };

  protected readonly compact: Signal<boolean> = computed(() => this.windowDimensionsService.isBelow('xl'));
  protected readonly story: Signal<IDemoStory | undefined> = computed(() => DEMO_STORIES[this.storyId()]);
  protected readonly files: Signal<ICodeFile[]> = computed(() => {
    const story = this.story();

    return story ? demoSourceFiles(story, this.args()) : [];
  });
  protected readonly controls: Signal<readonly IDemoProperty[]> = computed(() =>
    this.filteredProperties().filter((property) => property.editor !== 'documentation')
  );
  protected readonly filteredProperties: Signal<readonly IDemoProperty[]> = computed(() => {
    const query = this.search().toLowerCase().trim();

    return this.story()?.properties.filter((property) => `${property.name} ${property.type} ${property.description}`.toLowerCase().includes(query)) ?? [];
  });

  public readonly storyId: InputSignal<string> = input.required<string>();

  public readonly actionsTemplate: Signal<TemplateRef<unknown> | undefined> = viewChild<TemplateRef<unknown>>('workbenchActions');

  private loadingTimer: ReturnType<typeof setTimeout> | undefined;
  private component: ComponentRef<unknown> | undefined;
  private revision: number = 0;
  private sequence: number = 0;

  constructor() {
    effect(() => {
      const story = this.story();
      const preview = this.preview();

      if (!story || !preview) return;

      untracked(() => {
        this.reset(false);
        this.events.set([]);
        this.search.set('');
        this.mount(story, preview);
      });
    });
    effect(() => {
      const args = this.args();

      this.component?.setInput('args', args);
    });
    this.destroyRef.onDestroy(() => {
      this.revision++;
      clearTimeout(this.loadingTimer);
    });
  }

  protected setSearch(value: string | number | null): void {
    this.search.set(String(value ?? ''));
  }

  protected reset(remount: boolean = true): void {
    const story = this.story();

    if (!story) return;

    this.args.set(structuredClone(story.args));
    this.errors.set({});
    this.drafts.set({});

    const preview = this.preview();

    if (remount && preview) this.mount(story, preview);
  }

  protected setValue(property: IDemoProperty, value: unknown): void {
    let parsed: DemoValue = value as DemoValue;

    try {
      if (property.editor === 'select' && value === null && !property.nullable) parsed = undefined;

      if (property.editor === 'json' && typeof value === 'string') parsed = value.trim() === '' ? undefined : (JSON.parse(value) as DemoValue);

      if (property.schema) {
        const error = validateDemoValue(parsed, property.schema, property.binding);

        if (error) throw new Error(error);
      }

      if (property.editor === 'number' && (value === '' || value === null || value === undefined)) {
        if (!property.optional && !property.nullable) throw new Error('Enter a number.');

        parsed = property.nullable ? null : undefined;
      }

      if (property.editor === 'number' && value !== undefined && value !== null && value !== '') {
        parsed = Number(value);

        if (!Number.isFinite(parsed)) throw new Error('Enter a finite number.');
      }

      if (property.constraints) {
        const error = validateDemoConstraints(parsed, property.constraints, this.args());

        if (error) throw new Error(error);
      }

      this.args.update((args) => ({ ...args, [property.name]: parsed }));
      this.errors.update((errors) => ({ ...errors, [property.name]: '' }));
      this.clearDraft(property.name);
    } catch (error: unknown) {
      this.drafts.update((drafts) => ({ ...drafts, [property.name]: String(value ?? '') }));
      this.errors.update((errors) => ({ ...errors, [property.name]: error instanceof Error ? error.message : 'Enter valid JSON.' }));
    }
  }

  protected retry(): void {
    const story = this.story();
    const preview = this.preview();

    if (story && preview) this.mount(story, preview);
  }

  protected textValue(property: IDemoProperty): string {
    const draft = this.drafts()[property.name];

    if (draft !== undefined) return draft;

    const value = this.args()[property.name];

    return property.editor === 'json' ? (JSON.stringify(value, null, 2) ?? '') : value === undefined || value === null ? '' : String(value);
  }

  protected booleanValue(property: IDemoProperty): boolean {
    return this.args()[property.name] === true;
  }

  protected options(property: IDemoProperty): IBxSelectOption<DemoValue>[] {
    return property.options?.map((value) => ({ label: String(value), value })) ?? [];
  }

  protected propertyHelp(property: IDemoProperty): string {
    return `${property.description}\nType: ${property.type}\nDefault: ${property.defaultExpression}`;
  }

  protected log(action: IDemoAction): void {
    const property = this.story()?.properties.find(
      (entry) => entry.kind === 'model' && `${entry.binding}Change` === action.name && entry.editor !== 'documentation'
    );

    if (property) {
      this.args.update((args) => ({ ...args, [property.name]: action.payload as DemoValue }));
      this.errors.update((errors) => ({ ...errors, [property.name]: '' }));
      this.clearDraft(property.name);
    }

    this.events.update((events) => [{ id: ++this.sequence, name: action.name, payload: describeDemoPayload(action.payload) }, ...events].slice(0, 100));
  }

  //#region Helpers

  private clearDraft(name: string): void {
    this.drafts.update((drafts) => Object.fromEntries(Object.entries(drafts).filter(([key]) => key !== name)));
  }

  private mount(story: IDemoStory, preview: ViewContainerRef): void {
    const revision = ++this.revision;
    const cached = this.loadedComponents.get(story.id);

    clearTimeout(this.loadingTimer);
    this.showLoading.set(false);
    this.loadError.set('');
    preview.clear();
    this.component = undefined;

    if (cached) {
      this.renderPreview(cached, preview);

      return;
    }

    this.loading.set(true);
    this.loadingTimer = setTimeout(() => {
      if (revision === this.revision && !this.destroyRef.destroyed) this.showLoading.set(true);
    }, 200);
    void story
      .load()
      .then((component) => {
        if (revision !== this.revision || this.destroyRef.destroyed) return;

        this.loadedComponents.set(story.id, component);
        this.renderPreview(component, preview);
      })
      .catch(() => {
        if (revision !== this.revision || this.destroyRef.destroyed) return;

        clearTimeout(this.loadingTimer);
        this.showLoading.set(false);
        this.loadError.set('The component example could not be loaded. Try again.');
        this.loading.set(false);
      });
  }

  private renderPreview(component: Type<unknown>, preview: ViewContainerRef): void {
    clearTimeout(this.loadingTimer);
    this.component = preview.createComponent(component, { bindings: [outputBinding<IDemoAction>('action', (action) => this.log(action))] });
    this.component.setInput('args', this.args());
    this.showLoading.set(false);
    this.loading.set(false);
  }

  //#endregion
}
