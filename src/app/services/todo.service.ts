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

    return newList.id;
  }

  getList(id: string | number) {
    // Se asegura que siempre sea del tipo number.
    id = Number (id);

    // Con find se busca la lista cuyo id sea igual al pasado por argumento.
    return this.list.find(data => data.id === id);
  }

  deleteList(list: List ) {
    this.list = this.list.filter( data => data.id !== list.id);
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
