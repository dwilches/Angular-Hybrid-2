import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { AboutNg2Component } from './about/aboutNg2.component';
import { EmptyComponent } from './empty/empty.component';
import { RouterListenerService } from './router-listener.service';

const routes: Routes = [
  { path: '', redirectTo: 'about', pathMatch: 'full' },
  { path: 'about', component: AboutNg2Component },
  { path: 'menu', component: EmptyComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '' },
    RouterListenerService
  ]
})
export class AppRoutingModule {
}
