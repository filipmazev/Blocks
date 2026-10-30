import { Pipe, PipeTransform } from '@angular/core';
import { ResolvableText } from '@filip.mazev/blocks/core';
import { truncatedText } from '../helpers/truncation.helpers';

/** Selects text for conditional feedback using the shared directive's reactive measurement. */
@Pipe({ name: 'bxTruncatedText' })
export class TruncatedTextPipe implements PipeTransform {
  public transform(text: ResolvableText | null | undefined, truncated: boolean, enabled = true): ResolvableText {
    return truncatedText(text, truncated, enabled);
  }
}
