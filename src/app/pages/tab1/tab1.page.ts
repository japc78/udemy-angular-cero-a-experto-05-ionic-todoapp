import { Component } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { List } from '../../models/list.model';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  list: List[] = [];

  constructor(public todoService: TodoService) {
    this.list = todoService.list;
  }
}
