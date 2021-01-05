import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodoService } from '../../services/todo.service';
import { List } from '../../models/list.model';
import { ListItem } from '../../models/list-item.model';

@Component({
  selector: 'app-add-list',
  templateUrl: './add-list.page.html',
  styleUrls: ['./add-list.page.scss'],
})
export class AddListPage implements OnInit {

  list: List;
  itemName = '';

  constructor(
    private todoService: TodoService,
    private router: ActivatedRoute
  ) {

    const listId = this.router.snapshot.paramMap.get('listId');
    // console.log(listId);

    this.list = this.todoService.getList(listId);
    // console.log(this.list);

  }

  ngOnInit() {
  }

  addItem() {
    if (this.itemName.length === 0){
      return;
    }

    const newItem = new ListItem(this.itemName);
    this.list.items.push(newItem);

    this.itemName = '';
    this.todoService.saveStorage();
  }

}
