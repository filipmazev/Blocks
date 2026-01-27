import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class UiActionsService {

    public downloadFile(data: Blob, filename: string, mimeType: string): void {
        const blob = new Blob([data], { type: mimeType });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
    }
}