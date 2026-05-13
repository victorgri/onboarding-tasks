import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from './interfaces/post.inteface';



@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private http = inject(HttpClient);

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(
      'https://jsonplaceholder.typicode.com/posts'
    );
  }
}