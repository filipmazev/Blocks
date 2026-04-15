import { ToastPosition } from '../../../../../../blocks/toastr/types/toastr.types';

export class ToastConfigRequest {
  public position: ToastPosition | null;
  public title: string | null;
  public message: string | null;
  public durationInMs: number | null;
  public animate: boolean | null;
  public swipeToDismiss: boolean | null;
  public maxOpened: number | null;

  constructor(
    position: ToastPosition | null,
    title: string | null,
    message: string | null,
    durationInMs: number | null,
    animate: boolean | null,
    swipeToDismiss: boolean | null,
    maxOpened: number | null
  ) {
    this.position = position;
    this.title = title;
    this.message = message;
    this.durationInMs = durationInMs;
    this.animate = animate;
    this.swipeToDismiss = swipeToDismiss;
    this.maxOpened = maxOpened;
  }
}
