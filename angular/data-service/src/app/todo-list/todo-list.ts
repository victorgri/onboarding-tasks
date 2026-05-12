import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../services/data';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todo-list.html',
})
export class TodoList {
  dataService = inject(DataService);

  newTodoTitle = '';

  addTodo() {
    if (!this.newTodoTitle.trim()) return;

    this.dataService.addTodo(this.newTodoTitle);
    this.newTodoTitle = '';
  }
}