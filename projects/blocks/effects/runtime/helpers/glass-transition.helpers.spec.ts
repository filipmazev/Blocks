import { createGlassTransition } from './glass-transition.helpers';

describe('shared overlay motion', () => {
  it('cancels interrupted transitions, preserves positioning styles and restores owned styles', async () => {
    const origin = document.createElement('button');
    const target = document.createElement('div');

    target.style.cssText = 'position:fixed;transform:translateX(20px);opacity:0.8';
    document.body.append(origin, target);

    const transition = createGlassTransition(origin, target);

    try {
      const entering = transition.enter();

      await new Promise<void>((resolve) => requestAnimationFrame(() => resolve()));

      const exiting = transition.exit();

      expect(await entering).toBe('cancelled');
      transition.destroy();
      expect(await exiting).toBe('cancelled');
      expect(target.style.transform).toBe('translateX(20px)');
      expect(target.style.opacity).toBe('0.8');
      expect(target.style.scale).toBe('');
      expect(target.style.visibility).toBe('');
    } finally {
      transition.destroy();
      origin.remove();
      target.remove();
    }
  });

  it('snaps under reduced motion and resolves close without leaving an animation loop', async () => {
    const origin = document.createElement('button');
    const target = document.createElement('div');

    document.body.append(origin, target);

    const transition = createGlassTransition(origin, target, { reducedMotion: true });

    try {
      expect(await transition.enter()).toBe('finished');
      expect(target.style.scale).toBe('');
      expect(await transition.exit()).toBe('finished');
      expect(target.style.visibility).toBe('hidden');
    } finally {
      transition.destroy();
      origin.remove();
      target.remove();
    }
  });
});
