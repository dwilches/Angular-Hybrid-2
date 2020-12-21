import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UpgradeModule } from '@angular/upgrade/static';

@Injectable({
  providedIn: 'root'
})
export class RouterListenerService {
  constructor(router: Router,
              upgradeModule: UpgradeModule) {
    const $transitions = upgradeModule.$injector.get('$transitions');
    $transitions.onSuccess({}, (transition) => {
      const url = transition.to().url;
      console.log('Angular.js is making Angular2 navigate to', url);
      router.navigateByUrl(url);
    });
  }
}
