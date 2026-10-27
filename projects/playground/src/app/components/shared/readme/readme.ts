import { ChangeDetectionStrategy, Component, computed, DOCUMENT, inject, input } from '@angular/core';
import { Router } from '@angular/router';
import { DOCUMENTATION, DOCUMENTATION_ALIASES } from '../../../generated/documentation';

@Component({
  selector: 'app-readme',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './readme.html',
  styleUrl: './readme.scss'
})
export class Readme {
  private readonly document = inject(DOCUMENT);
  private readonly router = inject(Router);
  protected readonly readmeContent = computed(() => {
    const requested = this.path().replace(/^\/+/, '');
    return (
      DOCUMENTATION[DOCUMENTATION_ALIASES[requested] ?? requested] ??
      '<p>This documentation page is unavailable. Run npm run tools:build-docs after adding a README.</p>'
    );
  });

  public readonly path = input.required<string>();

  /** Generated HTML uses a single delegated handler so internal links keep SPA navigation. */
  protected navigateDocumentation(event: MouseEvent): void {
    if (event.defaultPrevented || event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    const target = event.target as Element | null;
    const anchor = target?.closest?.('a[href]') as HTMLAnchorElement | null;
    if (!anchor || anchor.hasAttribute('download') || (anchor.target && anchor.target !== '_self')) return;
    const destination = new URL(anchor.href, this.document.baseURI);
    const base = new URL('.', this.document.baseURI);
    if (destination.origin !== base.origin || !destination.pathname.startsWith(base.pathname)) return;
    const route = destination.pathname.slice(base.pathname.length);
    if (!/^(?:home|glass|components(?:\/[^/?#]+)?|modal|toastr|icon-catalog)\/?$/.test(route)) return;
    event.preventDefault();
    void this.router.navigateByUrl(`/${route}${destination.search}${destination.hash}`);
  }
}
