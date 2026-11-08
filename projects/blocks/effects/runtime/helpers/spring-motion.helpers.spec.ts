import { createSpringMotion } from './spring-motion.helpers';

describe('shared spring motion', () => {
  it('retargets with continuous position and velocity, settles, and releases the shared clock', () => {
    const frames = new Map<number, FrameRequestCallback>();

    let nextId = 0;
    let position = 0;
    let velocity = 0;

    spyOn(globalThis, 'requestAnimationFrame').and.callFake((callback) => {
      frames.set(++nextId, callback);

      return nextId;
    });
    spyOn(globalThis, 'cancelAnimationFrame').and.callFake((id) => frames.delete(id));

    const motion = createSpringMotion([0], ([value], [speed]) => {
      position = value;
      velocity = speed;
    });
    const advance = (time: number): void => {
      const pending = [...frames.values()];

      frames.clear();
      pending.forEach((callback) => callback(time));
    };

    try {
      motion.retarget([100]);
      advance(0);
      advance(16);

      const previousPosition = position;
      const previousVelocity = velocity;

      expect(position).toBeGreaterThan(0);
      motion.retarget([20]);
      expect(position).toBe(previousPosition);
      expect(velocity).toBe(previousVelocity);

      for (let time = 32; time < 5000 && frames.size; time += 16) advance(time);

      expect(position).toBe(20);
      expect(velocity).toBe(0);
      expect(frames.size).toBe(0);
    } finally {
      motion.destroy();
    }
  });

  it('snaps on reduced motion and cancels queued work on destruction', () => {
    const cancel = spyOn(globalThis, 'cancelAnimationFrame');
    const request = spyOn(globalThis, 'requestAnimationFrame').and.returnValue(99);
    const render = jasmine.createSpy('render');
    const motion = createSpringMotion([0, 10], render);

    motion.retarget([100, 30]);
    motion.retarget([100, 30], true);
    expect(cancel).toHaveBeenCalledWith(99);
    expect(render).toHaveBeenCalledWith([100, 30], [0, 0]);
    request.calls.reset();
    motion.retarget([100, 30], true);
    expect(request).not.toHaveBeenCalled();
    motion.retarget([0, 0]);
    motion.destroy();
    render.calls.reset();
    motion.retarget([10, 10]);
    expect(render).not.toHaveBeenCalled();
    expect(cancel.calls.count()).toBe(2);
  });

  it('rejects invalid targets atomically without corrupting the current channels', () => {
    const render = jasmine.createSpy('render');
    const motion = createSpringMotion([2, 4], render);

    try {
      expect(() => motion.retarget([3])).toThrowError(RangeError);
      expect(() => motion.retarget([3, Number.NaN])).toThrowError(RangeError);
      motion.retarget([2, 4], true);
      expect(render).toHaveBeenCalledWith([2, 4], [0, 0]);
    } finally {
      motion.destroy();
    }
  });
});
