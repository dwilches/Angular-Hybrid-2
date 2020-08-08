import { heroAppModule } from './ng1-app.module';

heroAppModule.config([ '$locationProvider', ($locationProvider) => {
  $locationProvider.html5Mode(true);
} ]);

heroAppModule.config([ '$stateProvider', ($stateProvider) => {
  $stateProvider.state({
    name: 'menu',
    url: '/menu',
    template: '<menu-ng1></menu-ng1>'
  });
  $stateProvider.state({
    name: 'about',
    url: '/about',
    template: '<about-ng2></about-ng2>'
  });
} ]);
