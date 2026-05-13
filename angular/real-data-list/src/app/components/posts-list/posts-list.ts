import {
  Component,
  OnInit,
  inject,
  signal
} from '@angular/core';

import { CommonModule } from '@angular/common';
import { PostsService } from '../../services/posts';
import { Post } from '../../services/interfaces/post.inteface';



@Component({
  selector: 'app-posts-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './posts-list.html',
  styleUrl: './posts-list.scss'
})
export class PostsList implements OnInit {
  private postsService = inject(PostsService);

  posts = signal<Post[]>([]);
  isLoading = signal(true);
  error = signal<string | null>(null);

  ngOnInit(): void {
    this.loadPosts();
  }

  loadPosts(): void {
    this.isLoading.set(true);
    this.error.set(null);

    this.postsService.getPosts().subscribe({
      next: (data) => {
        this.posts.set(data);
        this.isLoading.set(false);
      },
      error: () => {
        this.error.set('Failed to load posts');
        this.isLoading.set(false);
      }
    });
  }
}