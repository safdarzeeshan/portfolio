import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class GalleryService {

  constructor(private http: Http) {}

  //from google photos
  private galleryUrl = 'https://picasaweb.google.com/data/feed/api/user/safdarzeeshan/albumid/6139649719762631793?imgmax=1024&alt=json'

  getImages (){
    return this.http
        .get(this.galleryUrl)
        .map(res => res.json().feed.entry);
  }

}
