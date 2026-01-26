import { Component, input, output } from "@angular/core";
import { GenericModalConfig } from "../../../classes/generic-modal-config";
import { ModalCloseMode } from "../../../types/modal.types";

@Component({
  selector: 'modal-banner',
  templateUrl: './modal-banner.html',
  styleUrl: './modal-banner.scss',
})
export class ModalBanner<D = unknown> {
  readonly config = input.required<GenericModalConfig<D> | undefined>();

  readonly close = output<ModalCloseMode | undefined>();
}