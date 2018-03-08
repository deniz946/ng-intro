import { Component } from '@angular/core';
import { Todo } from './todos-list/todos-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public newTodo = '';
  public todos: Todo[] = [{ title: 'mi todo', done: true },
  { title: 'mi todo2', done: false }];

  addTodo(todo) {
    this.todos.unshift(this.generateNewTodo(todo));
    this.newTodo = '';
  }

  generateNewTodo(todo): any {
    return { title: todo, done: false };
  }

  todosUpdated(todos: Todo[]) {
    this.todos = todos;
  }
}
