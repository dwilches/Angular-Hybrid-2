import { heroAppModule } from './ng1-app.module';
import { downgradeComponent } from '@angular/upgrade/static';
import { AboutNg2Component } from '../app/about/aboutNg2.component';

import * as angular from 'angular';
import { MainNg2Component } from '../app/main/mainNg2.component';
import { MenuNg2Component } from '../app/menu/menuNg2.component';

heroAppModule
  .directive(
    'mainNg2',
    downgradeComponent({ component: MainNg2Component }) as angular.IDirectiveFactory
  );

heroAppModule
  .directive(
    'menuNg2',
    downgradeComponent({ component: MenuNg2Component }) as angular.IDirectiveFactory
  );

heroAppModule
  .directive(
    'aboutNg2',
    downgradeComponent({ component: AboutNg2Component }) as angular.IDirectiveFactory
  );
