import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Todo } from '../list-todo/list-todo.component';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  id: number;
  todo: Todo;

  constructor(private todoService: TodoDataService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.todo = new Todo(this.id, '', false, new Date());
    if (this.id != -1) {
      this.todoService.retrieveTodo('simon', this.id).subscribe(
        response => this.todo = response
      );
    }
  }

  saveTodo() {
    if (this.id === -1) {
      this.todoService.createTodo('simon', this.todo).subscribe(
        response => {
          console.log(response);
          this.router.navigate(['todo']);
        }
      );
    } else {
      this.todoService.updateTodo('simon', this.id, this.todo).subscribe(
        response => {
          console.log(response);
          this.router.navigate(['todo']);
        }
      );
    }
  }
}
