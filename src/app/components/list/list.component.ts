import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { TodoService } from '../../services/todo.service';
import { List } from '../../models/list.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {

  @Input() isFinished = true;

  list: List[] = [];

  constructor(
    private todoService: TodoService,
    private router: Router) {
    this.list = todoService.list;
  }

  ngOnInit() {}

  viewList(list: List) {
    this.router.navigateByUrl(`/tabs/tab${this.isFinished ? 2 : 1}/add-list/${list.id}`);
  }
}
