import { Component, OnInit } from '@angular/core';
import { RouterListenerService } from '../router-listener.service';

@Component({
  selector: 'app-main-ng2',
  template: `
    <div class="ng2">
      This is the Angular2 router
      <router-outlet></router-outlet>
    </div>
  `
})
export class MainNg2Component implements OnInit {

  constructor(routerListener: RouterListenerService) { }

  ngOnInit(): void {
  }

}
