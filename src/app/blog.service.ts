import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class BlogService {

  constructor (private http: Http) {}

  private blogUrl = 'http://localhost:8888/wordpress/wp-json/wp/v2/';  // URL to web API

  getPosts (){
    return this.http
        .get(this.blogUrl + 'posts')
        .map(res => res.json());
  }
}
