import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";
import { CreateTodoComponent } from "./components/create-todo/create-todo.component";
import { EditTodoComponent } from "./components/edit-todo/edit-todo.component";
import { IndexTodoComponent } from "./components/index-todo/index-todo.component";
import { TodoRoutingModule } from "./todo-routing.module";

@NgModule({
  declarations: [
    CreateTodoComponent,
    EditTodoComponent,
    IndexTodoComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    TodoRoutingModule
  ],
  providers: [

  ],
  exports: [
    CreateTodoComponent,
    EditTodoComponent,
    IndexTodoComponent
  ]
})
export class TodoModule {

}
