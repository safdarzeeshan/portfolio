import { Component, OnInit } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { BlogService } from '../blog.service';

@Component({
  moduleId: module.id,
  selector: 'app-blog',
  templateUrl: 'blog.component.html',
  styleUrls: ['blog.component.css'],
  providers: [BlogService, HTTP_PROVIDERS]
})
export class BlogComponent implements OnInit {
  posts=[];

  constructor(private blogService: BlogService) {}

  ngOnInit() {
    this.blogService.getPosts()
    .subscribe(
          data => this.posts = data
    )
  }

}
