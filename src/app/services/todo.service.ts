import { Injectable } from '@angular/core';
import { List } from '../models/list.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  list: List[] = [];

  constructor() {
    console.log('Service initialized');

  }
}
