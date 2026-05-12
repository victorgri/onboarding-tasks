import { Injectable, signal, computed } from '@angular/core';

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class DataService {
  // STATE
  private todosSignal = signal<Todo[]>([
    { id: 1, title: 'Learn Signals', completed: false },
    { id: 2, title: 'Build Angular App', completed: true },
  ]);

  // READONLY SIGNAL
  todos = this.todosSignal.asReadonly();

  // COMPUTED SIGNAL
  completedTodosCount = computed(() =>
    this.todosSignal().filter(todo => todo.completed).length
  );

  // ACTIONS
  addTodo(title: string) {
    const newTodo: Todo = {
      id: Date.now(),
      title,
      completed: false,
    };

    this.todosSignal.update(todos => [...todos, newTodo]);
  }

  toggleTodo(id: number) {
    this.todosSignal.update(todos =>
      todos.map(todo =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  }

  removeTodo(id: number) {
    this.todosSignal.update(todos =>
      todos.filter(todo => todo.id !== id)
    );
  }
}