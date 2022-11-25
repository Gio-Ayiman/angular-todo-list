import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from 'src/app/core/models/Todo';
import { TodoService } from 'src/app/core/services/todo.service';

@Component({
  selector: 'app-index-todo',
  templateUrl: './index-todo.component.html',
  styleUrls: ['./index-todo.component.css']
})
export class IndexTodoComponent implements OnInit {

  todos$!: Observable<Todo[]>

  constructor(
    private todoService: TodoService
  ) { }

  ngOnInit(): void {
    this.getAllTodo();
  }

  getAllTodo(): void {
    this.todos$ = this.todoService.getAllTodo();
  }
}
