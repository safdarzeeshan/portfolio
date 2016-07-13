import { Component, ViewChild, OnInit, ViewContainerRef } from '@angular/core';
import { GalleryService } from '../gallery.service';
import { HTTP_PROVIDERS } from '@angular/http';
// import {Modal, BS_MODAL_PROVIDERS} from 'angular2-modal/plugins/bootstrap';
import { MODAL_DIRECTIVES, ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';

@Component({
  moduleId: module.id,
  selector: 'app-gallery',
  templateUrl: 'gallery.component.html',
  styleUrls: ['gallery.component.css', '../app.component.css'],
  providers: [GalleryService, HTTP_PROVIDERS],
  // viewProviders: [...BS_MODAL_PROVIDERS]
  directives: [MODAL_DIRECTIVES]
})

export class GalleryComponent implements OnInit {
  @ViewChild('modal')
  modal: ModalComponent;

  images = []
  imageUrl: any;
  message:string;

  constructor(private galleryService: GalleryService) {
    // modal.defaultViewContainer = viewContainer;
  }

  ngOnInit() {
    this.galleryService.getImages()
    .subscribe(
            data => this.images = data
          // data => console.log(data[0].media$group.media$content[0].url)
    )
  }

  open(imageUrlImage){
    console.log(imageUrlImage);
    this.imageUrl = imageUrlImage;
    this.modal.open();
  }


}
