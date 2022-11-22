import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateTodoComponent } from './Todo/create-todo/create-todo.component';
import { EditTodoComponent } from './Todo/edit-todo/edit-todo.component';
import { IndexTodoComponent } from './Todo/index-todo/index-todo.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateTodoComponent,
    EditTodoComponent,
    IndexTodoComponent
  ],
  imports: [
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
