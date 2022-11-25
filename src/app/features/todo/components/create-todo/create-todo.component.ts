import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Todo } from 'src/app/core/models/Todo';
import { TodoService } from 'src/app/core/services/todo.service';

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
    private todoService: TodoService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.todoForm = this.fb.group({
      title: ['', Validators.required],
      isDone: false
    })
  }

  onSave(): void {
    this.todo = this.todoForm.value;
    this.todoService.saveTodo(this.todo).subscribe();

    this.router.navigateByUrl('/todo')
  }

}
