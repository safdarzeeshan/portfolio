import { Component, OnInit } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { BlogService } from '../blog.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-blog',
  templateUrl: 'blog.component.html',
  styleUrls: ['blog.component.css'],
  providers: [BlogService, HTTP_PROVIDERS]
})
export class BlogComponent implements OnInit {
  posts=[];
  name = 'test';

  constructor(private blogService: BlogService, public router:Router) {}

  ngOnInit() {
    this.blogService.getPosts()
    .subscribe(
          data => this.posts = data
    )
  }

  gotoBlogPost(id) {
    this.router.navigate(['/blogpost', id]);
  }

}
