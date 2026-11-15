import { createVisualPresence } from './visual-presence.helpers';

describe('shared visual presence', () => {
  it('preserves SVG geometry and restores owned styles without changing transforms or accessible text', () => {
    const element = document.createElementNS('http://www.w3.org/2000/svg', 'svg');

    element.style.cssText = 'opacity: 0.8 !important; scale: 1.2; transform: rotate(10deg); transform-origin: 20% 30%';
    element.setAttribute('aria-label', 'Save');

    const original = element.style.cssText;
    const presence = createVisualPresence(element);

    presence.update(false, true);
    expect(element.style.opacity).toBe('0');
    expect(element.style.scale).toBe('0.9');
    expect(element.style.transform).toBe('rotate(10deg)');
    expect(element.style.transformOrigin).toBe('center center');
    expect(element.getAttribute('aria-label')).toBe('Save');
    expect(element.style.display).toBe('');
    presence.destroy();
    expect(element.style.cssText).toBe(original);
    presence.update(true);
    expect(element.style.cssText).toBe(original);
  });

  it('retargets without restarting, bounds opacity, notifies hidden settlement once, and stops the shared clock', () => {
    const frames = new Map<number, FrameRequestCallback>();
    const element = document.createElement('span');
    const onHidden = jasmine.createSpy('onHidden');

    let nextId = 0;

    spyOn(globalThis, 'requestAnimationFrame').and.callFake((callback) => {
      frames.set(++nextId, callback);

      return nextId;
    });
    spyOn(globalThis, 'cancelAnimationFrame').and.callFake((id) => frames.delete(id));

    const advance = (time: number): void => {
      const callbacks = [...frames.values()];

      frames.clear();
      callbacks.forEach((callback) => callback(time));
      expect(Number(element.style.opacity)).toBeGreaterThanOrEqual(0);
      expect(Number(element.style.opacity)).toBeLessThanOrEqual(1);
    };

    const presence = createVisualPresence(element, { onHidden });

    try {
      presence.update(false);
      advance(0);
      advance(16);

      const interrupted = element.style.opacity;

      presence.update(true);
      expect(element.style.opacity).toBe(interrupted);
      advance(32);
      presence.update(false);

      for (let time = 48; time < 3000 && frames.size; time += 16) advance(time);

      expect(frames.size).toBe(0);
      expect(element.style.opacity).toBe('0');
      expect(onHidden).toHaveBeenCalledTimes(1);
      presence.update(false, true);
      expect(onHidden).toHaveBeenCalledTimes(1);
      presence.update(true);
      expect(frames.size).toBe(1);
      presence.update(true, true);
      expect(frames.size).toBe(0);
      expect(element.style.opacity).toBe('1');
      presence.update(false);
      presence.destroy();
      expect(frames.size).toBe(0);
    } finally {
      presence.destroy();
    }
  });
});
