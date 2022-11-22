import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Todo } from 'src/app/models/Todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.css']
})
export class CreateTodoComponent implements OnInit {

  todo!: Todo;

  todoForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private todoService: TodoService) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.todoForm = this.fb.group({
      title: ['', Validators.required]
    })
  }

  onSave(): void {
    this.todo = this.todoForm.value.title;
    this.todoService.saveTodo(this.todo);
  }

}
