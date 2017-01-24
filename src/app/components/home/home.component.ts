import * as _ from 'lodash';
import { Component } from '@angular/core';
import { PostService } from '../../services/post-service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html'
})
export class HomeComponent {
  public posts = [];

  constructor(private postService: PostService) {
    this.postService.getPosts('full');
  }

  ngOnInit() {
    this.postService.posts.subscribe(data => {
      if (data) {
        this.posts = _.concat(this.posts, data);
      }
    });
  }

  getPosts(preloaderType) {
    this.postService.getPosts(preloaderType);
  }
}
