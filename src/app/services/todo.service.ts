import { Injectable } from '@angular/core';
import { List } from '../models/list.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  list: List[] = [];

  constructor() {
    const list1 = new List('Estudiar Angular');
    const list2 = new List('Estudiar certificacion de Java');

    this.list.push(list1, list2);
    // console.log(this.list);

  }
}
