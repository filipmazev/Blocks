import { mountGlassScene } from './scene.helpers';
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

  it('lights an inert receiver through its containing hit area and releases that override on update', async () => {
    const card = document.createElement('div');
    const visual = document.createElement('div');
    const hitArea = document.createElement('button');

    card.style.cssText = 'position:fixed;left:20px;top:20px;width:200px;height:140px';
    card.setAttribute('data-bx-light-scope', '');
    visual.style.cssText = 'position:absolute;left:30px;top:30px;width:100px;height:60px';
    visual.inert = true;
    hitArea.type = 'button';
    hitArea.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;background:transparent';
    card.append(visual, hitArea);
    document.body.append(card);

    const receiver = mountSurface(visual, { interactive: false, reducedMotion: true, lightingTarget: card });
    const scene = mountGlassScene(card, { lights: [{ element: card, color: 'rgb(20, 100, 220)', z: 50, radius: 320 }] });
    const frame = (): Promise<void> => new Promise((resolve) => requestAnimationFrame(() => resolve()));
    const light = visual.querySelector<HTMLElement>('.bx-glass-decoration');

    try {
      await frame();
      await frame();
      expect(light?.style.getPropertyValue('--bx-glass-light-color')).toBe('rgb(20, 100, 220)');
      expect(visual.dataset['bxSurfaceInteractive']).toBe('false');
      receiver.update({ interactive: false, reducedMotion: true });
      scene.refresh();
      await frame();
      await frame();
      expect(light?.style.getPropertyValue('--bx-glass-light-color')).toBe('white');
    } finally {
      scene.destroy();
      receiver.destroy();
      card.remove();
    }
  });
});
