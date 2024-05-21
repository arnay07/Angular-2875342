import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlightText',
})
export class HighlightTextPipe implements PipeTransform {
  transform(value: string, filter: string): string {
    if (!filter) {
      return value;
    }

    const re = new RegExp(filter, 'gi');
    return value.replace(re, `<span class="highlight-text">$&</span>`);
  }
}
