import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import {environment } from './app';
import { AppComponent } from './app/app.component';
import { APP_ROUTER_PROVIDERS } from './app/app.routes';
import {MODAL_BROWSER_PROVIDERS} from 'angular2-modal/platform-browser';
import { MODAL_DIRECTIVES } from 'ng2-bs3-modal/ng2-bs3-modal';



if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [
  APP_ROUTER_PROVIDERS, MODAL_BROWSER_PROVIDERS
]);


