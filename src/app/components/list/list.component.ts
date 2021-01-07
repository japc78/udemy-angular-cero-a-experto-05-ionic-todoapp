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

  constructor(
    public todoService: TodoService,
    private router: Router) {
  }

  ngOnInit() {}

  viewList(list: List) {
    this.router.navigateByUrl(`/tabs/tab${this.isFinished ? 2 : 1}/add-list/${list.id}`);
  }

  deleteList(list: List) {
    this.todoService.deleteList(list);
  }
}
