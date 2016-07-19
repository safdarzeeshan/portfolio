import { Component, ViewChild, OnInit, ViewEncapsulation } from '@angular/core';
import { GalleryService } from '../gallery.service';
import { HTTP_PROVIDERS } from '@angular/http';
import {Modal} from "ng2-modal";

@Component({
  moduleId: module.id,
  selector: 'app-gallery',
  templateUrl: 'gallery.component.html',
  styleUrls: ['gallery.component.css', '../app.component.css', 'gallery2.component.css'],
  providers: [GalleryService, HTTP_PROVIDERS],
  directives: [Modal]
})

export class GalleryComponent implements OnInit {
  @ViewChild('myModal')
  modal: Modal;

  images = []
  imageUrl: any;
  message:string;
  imageIndex:number;

  constructor(private galleryService: GalleryService) {
  }

  ngOnInit() {
    this.galleryService.getImages()
    .subscribe(
            data => this.images = data
          // data => console.log(data[0].media$group.media$content[0].url)
    )
  }

  open(index){
    console.log(index)
    this.imageIndex=index;
    console.log(this.images[index].media$group.media$content[0].url);
    this.imageUrl = this.images[index].media$group.media$content[0].url;
    this.modal.open();
  }

  nextImage(){
    this.imageIndex++
    this.imageUrl = this.images[this.imageIndex].media$group.media$content[0].url;
  }

  previousImage(){
    this.imageIndex--
    this.imageUrl = this.images[this.imageIndex].media$group.media$content[0].url;
  }
}
