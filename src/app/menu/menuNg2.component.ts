import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-ng2',
  template: `
    <div class="ng2">
      This is the Angular2 menu:
      <div><a [routerLink]="['/menu']" routerLinkActive="active" class="name">Menu (Angular Router)</a></div>
      <div><a [routerLink]="['/about']" routerLinkActive="active" class="name">About (Angular Router)</a></div>
    </div>
  `
})
export class MenuNg2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
