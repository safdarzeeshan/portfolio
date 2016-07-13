import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES} from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  template:  `
<div>
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <!-- Brand and toggle get grouped for better mobile display -->
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
      </div>

      <!-- Collect the nav links, forms, and other content for toggling -->
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav">
          <li><a [routerLink]="['/']">About</a></li>
          <li><a [routerLink]="['/gallery']">Gallery</a></li>
          <li><a [routerLink]="['/blog']">Blog</a></li>
        </ul>
      </div><!-- /.navbar-collapse -->
    </div><!-- /.container-fluid -->
  </nav>
  <div class="outer-outlet">
    <router-outlet></router-outlet>
  </div>
</div>`,
  styleUrls: ['app.component.css'],
  // add our router directives we will be using
  directives: [ROUTER_DIRECTIVES]
})
export class AppComponent {
  // show = false;

}