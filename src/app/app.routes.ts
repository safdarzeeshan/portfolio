import { provideRouter, RouterConfig } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { GalleryComponent } from './gallery/gallery.component';


export const routes: RouterConfig = [
  { path: '', component: HomeComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'blog', component: BlogComponent }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];