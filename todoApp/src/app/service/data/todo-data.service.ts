import { Injectable } from '@angular/core';
import {HelloWorldBean} from './welcome-data.service';
import {HttpClient} from '@angular/common/http';
import {Todo} from '../../list-todo/list-todo.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private Http: HttpClient) { }

  retrieveAllTodos(username) {
    return this.Http.get<Todo[]>(`http://localhost:8080/users/${username}/todos`);
  }

  deleteTodo(username, id) {
    return this.Http.delete(`http://localhost:8080/users/${username}/todos/${id}`);
  }

  retrieveTodo(username, id) {
    return this.Http.get<Todo>(`http://localhost:8080/users/${username}/todos/${id}`);
  }

  updateTodo(username, id, todo) {
    return this.Http.put(`http://localhost:8080/users/${username}/todos/${id}`, todo);
  }

  createTodo(username, todo) {
    return this.Http.post(`http://localhost:8080/users/${username}/todos`, todo);
  }
}
