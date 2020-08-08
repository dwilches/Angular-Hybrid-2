import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  template: `
    <div class="ng2">
        <h1 class="ng2">Settings</h1>
        <picture-ng2></picture-ng2>
    </div>
  `,
})
export class SettingsNg2Component implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
