import { heroAppModule } from './ng1-app.module';

heroAppModule
  .component('mainNg1', {
    template: `
    <div class="ng1">
      This is the main component of the application.
      <ul>
        <li><a ui-sref="menu" ui-sref-active="active">Menu (ui-sref)</a></li>
        <li><a ui-sref="about" ui-sref-active="active">About (ui-sref)</a></li>
      </ul>

      <div ui-view></div>
    </div>
  `
  });

