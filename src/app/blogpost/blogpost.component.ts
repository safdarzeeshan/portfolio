import { Component, OnInit } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { BlogService } from '../blog.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-blogpost',
  templateUrl: 'blogpost.component.html',
  styleUrls: ['blogpost.component.css'],
  providers: [BlogService, HTTP_PROVIDERS]
})

export class BlogpostComponent implements OnInit {
    private sub: any;
    post = [];


    constructor(private blogService: BlogService,
              public router:Router,
              private route: ActivatedRoute) {}

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            let id = +params['id'];
            this.blogService.getPost(id)
            .subscribe(
                data => {this.post = data}
            )
        });
    }

}
