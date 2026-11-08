import { mountSurface } from './surface.helpers';

describe('surface emission origin', () => {
  it('paints the registered descendant rim, retints it on semantic changes, and clears it on teardown', async () => {
    const host = document.createElement('button');
    const marker = document.createElement('span');

    host.type = 'button';
    host.setAttribute('aria-current', 'step');
    host.style.cssText = 'position:fixed;left:10px;top:10px;width:80px;height:40px';
    marker.className = 'marker';
    marker.style.cssText = 'display:block;width:30px;height:30px';
    host.append(marker);
    document.body.append(host);

    const receiver = mountSurface(marker, { interactive: false, emission: false, reducedMotion: true });
    const options = { emission: 'rgb(255, 0, 0)', emissionOrigin: '.marker', emissionStrength: 0.2, reducedMotion: true };
    const source = mountSurface(host, options);
    const frame = (): Promise<void> => new Promise((resolve) => requestAnimationFrame(() => resolve()));

    try {
      await frame();
      await frame();

      const rim = marker.querySelector<HTMLElement>('.bx-glass-rim > [data-bx-light-source="emitter"]');

      expect(rim).not.toBeNull();
      expect(rim?.style.backgroundImage).toContain('16%');
      expect(host.querySelector(':scope > .bx-glass-rim > [data-bx-light-source="emitter"]')).toBeNull();
      source.update({ ...options, emission: 'rgb(0, 0, 255)' });
      await frame();
      expect(rim?.style.backgroundImage).toContain('rgb(0, 0, 255)');
      expect(marker.querySelector('.bx-glass-ambient')).not.toBeNull();
      source.destroy();
      expect(marker.querySelector('[data-bx-light-source="emitter"]')).toBeNull();
    } finally {
      source.destroy();
      receiver.destroy();
      host.remove();
    }
  });
});
