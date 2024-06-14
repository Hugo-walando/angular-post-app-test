import { Component } from '@angular/core';
import { PostsService } from '../services/posts.service';
import { Post, Posts } from '../../types';
import { PostComponent } from '../components/post/post.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PostComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(private postsService: PostsService) {}

  posts: Post[] = [];
  ngOnInit() {
    this.postsService
      .getPosts('https://jsonplaceholder.typicode.com/posts')
      .subscribe((posts: Posts) => {
        this.posts = posts;
      });
  }
}
