import { Injectable } from '@angular/core';
import { List } from '../models/list.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  list: List[] = [];

  constructor() {
    this.loadStorage();
  }

  addList(title: string) {
    const newList = new List(title);
    this.list.push(newList);
    this.saveStorage();
  }

  saveStorage() {
    localStorage.setItem('data', JSON.stringify(this.list));
  }

  loadStorage() {
    if (localStorage.getItem('data')) {
      this.list = JSON.parse(localStorage.getItem('data'));
    }
  }
}
