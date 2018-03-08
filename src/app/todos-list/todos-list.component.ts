import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

export class Todo {
  title: string;
  done: boolean;
}

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.css']
})

export class TodosListComponent implements OnInit {
  @Input() todos: Todo[] = [];
  @Output() todosChanged: EventEmitter<Todo[]> = new EventEmitter<Todo[]>();
  constructor() { }

  ngOnInit() {
  }

  deleteTodo(index: number) {
    console.log(index);
    this.todos.splice(index, 1);
    this.todosChanged.emit(this.todos);
  }

}
