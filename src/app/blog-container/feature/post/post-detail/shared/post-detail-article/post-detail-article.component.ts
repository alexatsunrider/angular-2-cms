import { BlogPostService } from './../../../../../shared/services/blog-post.service';
import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-detail-article',
  templateUrl: './post-detail-article.component.html',
  styleUrls: ['./post-detail-article.component.css']
})
export class PostDetailArticleComponent implements OnInit {
  @Input('post') post:any;
  constructor(
    private router: Router,
    private blogPostService: BlogPostService
  ) { }

  ngOnInit() {
    if (Object.keys(this.post).length<=1) this.router.navigate(['/not-found']);
    this.blogPostService.countView(this.post.uid)
  }

}
