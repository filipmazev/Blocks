import { mountSelectionMotion } from './selection-motion.helpers';

describe('shared row selection motion', () => {
  it('tracks pointer and keyboard selection without changing committed values and skips disabled rows', async () => {
    const root = document.createElement('div');

    root.setAttribute('role', 'listbox');
    root.style.cssText = 'position:fixed;left:20px;top:20px;width:200px';
    root.innerHTML =
      '<button role="option" aria-selected="true" style="display:block;width:100%;height:30px">First</button><button role="option" style="display:block;width:100%;height:50px">Second</button>';
    document.body.append(root);

    const motion = mountSelectionMotion(root, { reducedMotion: false });
    const rows = root.querySelectorAll<HTMLButtonElement>('button');
    const surface = root.querySelector<HTMLElement>('.bx-selection-surface');

    try {
      rows[1].dispatchEvent(new PointerEvent('pointerover', { bubbles: true, pointerType: 'mouse' }));
      expect(surface?.style.height).toBe('50px');
      expect(surface?.style.transform).toContain('30px');
      expect(rows[0].getAttribute('aria-selected')).toBe('true');
      expect(rows[1].getAttribute('aria-selected')).toBeNull();
      rows[0].focus();
      expect(surface?.style.height).toBe('50px');
      motion.update({ reducedMotion: true });
      expect(surface?.style.height).toBe('30px');
      rows[1].disabled = true;
      await new Promise<void>((resolve) => queueMicrotask(resolve));
      expect(surface?.style.height).toBe('30px');
      motion.destroy();
      expect(root.querySelector('.bx-selection-surface')).toBeNull();
      expect(root.style.position).toBe('fixed');
    } finally {
      motion.destroy();
      root.remove();
    }
  });
});
