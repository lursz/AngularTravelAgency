import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'trust',
  standalone: true
})
  export class TrustPipe implements PipeTransform {
    constructor(private sanitizer: DomSanitizer) {}
    transform(value: string) {
      return this.sanitizer.bypassSecurityTrustHtml(value);
    }

}
