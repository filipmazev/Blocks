import { Component, input, output } from "@angular/core";

@Component({
    selector: 'modal-backdrop',
    imports: [],
    templateUrl: './modal-backdrop.html',
    styleUrls: ['./modal-backdrop.scss']
})
export class ModalBackdrop {
    readonly isAnimated = input(false);
    readonly isOpen = input(false);
    
    readonly click = output<MouseEvent>();
}