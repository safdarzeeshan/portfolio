import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import {environment } from './app';
import { AppComponent } from './app/app.component';
import { APP_ROUTER_PROVIDERS } from './app/app.routes';


if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [
  APP_ROUTER_PROVIDERS
]);


