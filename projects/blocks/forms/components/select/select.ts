import { Component, computed, inject, input, output, signal, ViewChild, OnInit, OnDestroy, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule, ConnectionPositionPair } from '@angular/cdk/overlay';
import { BX_I18N, BxBaseControl, DEFAULT_DEBOUNCE_TIME, isTextWithKey, ResolvableText, uuidv4 } from '@filip.mazev/blocks/core';
import { Icon } from '@filip.mazev/blocks/icons';
import { FormField } from '../form-field/form-field';
import { Subject, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { MenuItem } from '@filip.mazev/blocks/primitives';
import { BxSelectOption } from '../../interfaces/ibx-select-option.interface';
import { SearchInput } from '../search-input/search-input';

@Component({
  selector: 'bx-select',
  standalone: true,
  imports: [CommonModule, OverlayModule, FormField, Icon, MenuItem, SearchInput],
  templateUrl: './select.html',
  styleUrl: './select.scss'
})
export class Select<T> extends BxBaseControl<T> implements OnInit, OnDestroy {
  private readonly i18n = inject(BX_I18N, { optional: true });

  public readonly options = input.required<BxSelectOption<T>[]>();
  public readonly isSearchable = input<boolean>(false);
  public readonly externalFiltering = input<boolean>(false);
  
  public readonly searchPlaceholder = input<ResolvableText>('Search...');
  public readonly emptyMessage = input<ResolvableText>('No results found.');

  public readonly search = output<string>();

  public readonly isOpen = signal<boolean>(false);
  protected readonly searchTerm = signal<string>('');
  
  protected readonly inputId = computed(() => `bx-select-${uuidv4()}`);

  @ViewChild('searchInput') private searchInputRef?: SearchInput;
  @ViewChild('origin', { read: ElementRef }) private originRef?: ElementRef<HTMLElement>;

  private searchSubject = new Subject<string>();
  private sub?: Subscription;

  protected readonly overlayPositions: ConnectionPositionPair[] = [
    new ConnectionPositionPair({ originX: 'start', originY: 'bottom' }, { overlayX: 'start', overlayY: 'top' }, 0, 4),
    new ConnectionPositionPair({ originX: 'start', originY: 'top' }, { overlayX: 'start', overlayY: 'bottom' }, 0, -4)
  ];

  public override ngOnInit(): void {
    super.ngOnInit();
    
    this.sub = this.searchSubject.pipe(
      debounceTime(DEFAULT_DEBOUNCE_TIME),
      distinctUntilChanged()
    ).subscribe(term => {
      this.searchTerm.set(term);
      if (this.externalFiltering()) {
        this.search.emit(term);
      }
    });
  }

  public ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  protected readonly resolvedOptions = computed(() => {
    this.i18n?.version?.();
    return this.options().map(opt => ({
      ...opt,
      resolvedStr: this.resolveText(opt.label)
    }));
  });

  protected readonly filteredOptions = computed(() => {
    const term = this.searchTerm().trim();
    const opts = this.resolvedOptions();

    if (this.externalFiltering() || !term) return opts;

    const fuzzyRegex = new RegExp(term.split('').join('.*'), 'i');
    return opts.filter(opt => fuzzyRegex.test(opt.resolvedStr));
  });

  protected readonly selectedOptionLabel = computed(() => {
    const currentVal = this.internalValue();
    const selected = this.resolvedOptions().find(o => o.value === currentVal);
    return selected ? selected.resolvedStr : this.resolveText(this.placeholder()) || '';
  });

  protected readonly resolvedSearchPlaceholder = computed(() => this.resolveText(this.searchPlaceholder()));
  protected readonly resolvedEmptyMessage = computed(() => this.resolveText(this.emptyMessage()));

  public toggleOpen(): void {
    if (this.isDisabled() || this.loading()) return;
    this.isOpen.set(!this.isOpen());
    
    if (this.isOpen() && this.isSearchable()) {
      setTimeout(() => this.searchInputRef?.focus(), 50);
    } else {
      this.markAsTouched();
    }
  }

  public close(): void {
    this.isOpen.set(false);
    this.markAsTouched();
  }

  protected onOutsideClick(event: MouseEvent): void {
    const clickTarget = event.target as Node;
    if (this.originRef?.nativeElement.contains(clickTarget)) {
      return;
    }
    this.close();
  }

  protected selectOption(option: BxSelectOption<T>): void {
    if (option.disabled) return;
    this.updateValue(option.value);
    this.close();
  }

  protected onSearchChange(value: string): void {
    this.searchSubject.next(value);
  }

  private resolveText(textObj: ResolvableText | undefined): string {
    if (!textObj) return '';
    return isTextWithKey(textObj) ? (this.i18n?.translate(textObj.key) ?? textObj.key) : textObj;
  }
}