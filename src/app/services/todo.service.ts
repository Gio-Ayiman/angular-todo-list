import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Todo } from '../models/Todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  path: string = environment.url + 'todo/';

  constructor(
    private http: HttpClient
  ) { }

  getAllTodo(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.path);
  }

  getOneTodo(id: number): Observable<Todo> {
    return this.http.get<Todo>(this.path + `${id}`);
  }

  saveTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.path, todo);
  }

  deleteTodo(id: number): Observable<void> {
    return this.http.delete<void>(this.path + `${id}`);
  }
}
