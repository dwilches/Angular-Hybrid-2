import { heroAppModule } from './ng1-app.module';

heroAppModule
  .component('mainNg1', {
    template: `
    <div class="ng1">
      This is the main component of the application.

      <div class="ng1">
          This is the Angular.js menu:
          <div><a ui-sref="menu" ui-sref-active="active">Menu (ui-sref)</a></div>
          <div><a ui-sref="about" ui-sref-active="active">About (ui-sref)</a></div>
      </div>

      <menu-ng2></menu-ng2>

    </div>
  `
  });

