import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public newTodo: any = '';
  public todos: any = [{ title: 'mi todo', done: true },
  { title: 'mi todo2', done: false }];

  deleteTodo(index: number) {
    console.log(index);
    this.todos.splice(index, 1);
  }

  addTodo(todo) {
    this.todos.unshift(this.generateNewTodo(todo));
    this.newTodo = '';
  }

  generateNewTodo(todo): any {
    return { title:todo, done: false };
  }
}
