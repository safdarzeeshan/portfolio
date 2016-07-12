import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { GalleryService } from '../gallery.service';
import { HTTP_PROVIDERS } from '@angular/http';
import {Modal, BS_MODAL_PROVIDERS} from 'angular2-modal/plugins/bootstrap';

@Component({
  moduleId: module.id,
  selector: 'app-gallery',
  templateUrl: 'gallery.component.html',
  styleUrls: ['gallery.component.css', '../app.component.css'],
  providers: [GalleryService, HTTP_PROVIDERS],
  viewProviders: [...BS_MODAL_PROVIDERS]
})

export class GalleryComponent implements OnInit {

  images = []

  constructor(private galleryService: GalleryService, public modal: Modal, viewContainer: ViewContainerRef) {
    modal.defaultViewContainer = viewContainer;
  }

  ngOnInit() {
    this.galleryService.getImages()
    .subscribe(
            data => this.images = data
          // data => console.log(data[0].media$group.media$content[0].url)
    )
  }

  open(imageurl){
    this.modal.alert()
      .body("<img src='" + imageurl + "'>")
      .size('lg')
      .isBlocking(true)
      .bodyClass('testa')
      .open();
  }


}
