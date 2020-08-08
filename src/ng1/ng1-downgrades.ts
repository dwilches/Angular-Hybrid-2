import { heroAppModule } from './ng1-app.module';
import { downgradeComponent } from '@angular/upgrade/static';
import { AboutNg2Component } from '../app/about/aboutNg2.component';

import * as angular from 'angular';
import { SettingsNg2Component } from '../app/settings/settingsNg2.component';

heroAppModule
  .directive(
    'aboutNg2',
    downgradeComponent({ component: AboutNg2Component }) as angular.IDirectiveFactory
  );

heroAppModule
  .directive(
    'settingsNg2',
    downgradeComponent({ component: SettingsNg2Component }) as angular.IDirectiveFactory
  );

