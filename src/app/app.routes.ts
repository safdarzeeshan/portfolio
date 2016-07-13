import { provideRouter, RouterConfig } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { GalleryComponent } from './gallery/gallery.component';
import { BlogpostComponent } from './blogpost/blogpost.component';


export const routes: RouterConfig = [
  { path: '', component: HomeComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'blogpost/:id', component: BlogpostComponent }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];