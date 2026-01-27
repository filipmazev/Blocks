import { Injectable } from "@angular/core";
import { ITEM_COPY_DEFAULT_SUFFIX } from "../constants/ui-services-common.consants";

@Injectable({
    providedIn: 'root'
})
export class TextFormattingService {

    constructor() { }

    public generateNameCopy(originalName: string, existingNames: string[] | undefined = undefined, copySuffix: string = ITEM_COPY_DEFAULT_SUFFIX): string {
        const existingNamesToLower = existingNames?.map(item => item.toLowerCase()) ?? [];

        let newName = `${originalName} (Copy)`;
        let copyIndex = 2;

        while (existingNamesToLower.includes(newName.toLowerCase())) {
            newName = `${originalName} (${copySuffix} ${copyIndex++})`;
        }

        return newName;
    }

    public formattedDateString(date: Date | string | undefined | null): string | undefined {
        if (!date) return undefined;

        const dateObj = (date instanceof Date) ? date : new Date(date);
        return dateObj.toLocaleDateString(undefined, {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
        });
    }
}