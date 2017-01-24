import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpService } from './http-service';
import { PostModel } from '../models/post-model';


@Injectable()
export class PostService {
  posts: BehaviorSubject<PostModel[]> = new BehaviorSubject<PostModel[]>(null);

  constructor(private http: HttpService) {
  }

  getPosts(preloaderType) {
    this.http.get('/posts?userId=1', null, preloaderType)
      .map(res => res.json())
      .subscribe(res => {
        let posts = [];
        res.forEach(post => {
          posts.push(new PostModel(post));
        });

        this.posts.next(posts);
      });
  }
}