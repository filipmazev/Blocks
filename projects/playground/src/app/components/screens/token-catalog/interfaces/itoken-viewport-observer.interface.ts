export interface ITokenViewportObserver {
  readonly intersect: (visible: boolean) => void;
  readonly resize: (width: number, height: number) => void;
}
