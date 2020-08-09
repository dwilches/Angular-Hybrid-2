import { BrowserModule } from '@angular/platform-browser';
import { DoBootstrap, NgModule } from '@angular/core';

import { UpgradeModule } from '@angular/upgrade/static';
import { AboutNg2Component } from './about/aboutNg2.component';
import { PictureNg2Directive } from './upgrades/pictureNg2.directive';
import { mainNg1ModuleName } from '../ng1';
import { SettingsNg2Component } from './settings/settingsNg2.component';

@NgModule({
  declarations: [
    AboutNg2Component,
    PictureNg2Directive,
    SettingsNg2Component
  ],
  imports: [
    BrowserModule,
    UpgradeModule
  ],
  providers: [],
  entryComponents: [
    AboutNg2Component,
    SettingsNg2Component
  ]
})
export class AppModule implements DoBootstrap {
  constructor(private upgrade: UpgradeModule) {
  }

  ngDoBootstrap(): void {
    this.upgrade.bootstrap(document.body, [ mainNg1ModuleName ], { strictDi: true });
  }
}
