import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateTodoComponent } from './Todo/create-todo/create-todo.component';
import { EditTodoComponent } from './Todo/edit-todo/edit-todo.component';
import { IndexTodoComponent } from './Todo/index-todo/index-todo.component';

const routes: Routes = [
  {
    path: 'todo',
    component: IndexTodoComponent
  },
  {
    path: 'create',
    component: CreateTodoComponent
  },
  {
    path: 'edit',
    component: EditTodoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
