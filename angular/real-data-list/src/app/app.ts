import { Component } from '@angular/core';
import { PostsList } from './components/posts-list/posts-list';


@Component({
  selector: 'app-root',
imports: [PostsList],
  template: `
    <app-posts-list />
  `,
  styleUrl: './app.scss'
})
export class App  {

}
