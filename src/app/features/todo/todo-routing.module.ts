import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "src/app/core/guards/auth.guard";
import { CreateTodoComponent } from "./components/create-todo/create-todo.component";
import { EditTodoComponent } from "./components/edit-todo/edit-todo.component";
import { IndexTodoComponent } from "./components/index-todo/index-todo.component";

const routes: Routes = [
  {
    path: 'create',
    component: CreateTodoComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'edit',
    component: EditTodoComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '',
    component: IndexTodoComponent,
    canActivate: [AuthGuard]
  },
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TodoRoutingModule {

}
