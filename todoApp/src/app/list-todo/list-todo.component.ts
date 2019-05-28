import { Component, OnInit } from '@angular/core';
import {TodoDataService} from '../service/data/todo-data.service';
import {Router} from '@angular/router';

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
  message: string;

  //   = [
  //   new Todo(1, 'Learn to dance', false, new Date()),
  //   new Todo(2, 'Learn to Code', false, new Date()),
  //   new Todo(3, 'Train for crossfit', false, new Date())
  // ]

  constructor(private todoDataService: TodoDataService, private router: Router) { }

  ngOnInit() {
    this.refreshTodoList();
  }

  refreshTodoList() {
    this.todoDataService.retrieveAllTodos('simon').subscribe(
      response => {
        this.todos = response;
        console.log(response);
      }
    );
  }

  deleteTodo(id) {
    console.log(`delete ${id}`);
    this.todoDataService.deleteTodo('simon', id).subscribe(
      response => {
        console.log(response);
        this.message = `Delete of todo ${id} Successful!`;
        this.refreshTodoList();
      }
    );
  }

  updateTodo(id) {
    console.log(`update ${id}`);
    this.router.navigate(['todos', id]);
  }

  addTodo() {
    this.router.navigate(['todos', -1]);
  }

}
