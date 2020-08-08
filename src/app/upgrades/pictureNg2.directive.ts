import { Directive, ElementRef, Injector } from '@angular/core';
import { UpgradeComponent } from '@angular/upgrade/static';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: 'picture-ng2'
})
export class PictureNg2Directive extends UpgradeComponent {
  constructor(elementRef: ElementRef, injector: Injector) {
    super('pictureNg1', elementRef, injector);
  }
}
