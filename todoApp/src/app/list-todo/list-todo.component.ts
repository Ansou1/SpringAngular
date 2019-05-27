import { Component, OnInit } from '@angular/core';
import {TodoDataService} from '../service/data/todo-data.service';

export class Todo {
  constructor(public id: number, public description: string, public done: boolean, public targetDate: Date) {}

}

@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.css']
})

export class ListTodoComponent implements OnInit {

  todos: Todo[];
  //   = [
  //   new Todo(1, 'Learn to dance', false, new Date()),
  //   new Todo(2, 'Learn to Code', false, new Date()),
  //   new Todo(3, 'Train for crossfit', false, new Date())
  // ]

  constructor(private todoDataService: TodoDataService) { }

  ngOnInit() {
    this.todoDataService.retrieveAllTodos('simon').subscribe(
      response => {
        this.todos = response;
        console.log(response);
      }
    );
  }

}
