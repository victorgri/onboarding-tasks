import { Component, signal } from '@angular/core';

import { TodoList } from './todo-list/todo-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ TodoList],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('data-service');
}
