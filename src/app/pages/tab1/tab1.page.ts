import { Component } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { List } from '../../models/list.model';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  list: List[] = [];

  constructor(
      public todoService: TodoService,
      private router: Router,
      public alertController: AlertController
      ) {
    this.list = todoService.list;

  }

  async addList() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'New list',
      inputs: [
        {
          name: 'title',
          type: 'text',
          placeholder: 'Name list'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Test: Cancel action');
          }
        },
        {
          text: 'Save',
          handler: (data) => {
            console.log(data);
            if (data.title.length === 0) {
              return;
            }
            // Create List
            const listId = this.todoService.addList(data.title);
            this.router.navigateByUrl(`/tabs/tab1/add-list/${listId}`);
          }
        }
      ]
    });

    alert.present();
  }

  viewList(list: List) {
    this.router.navigateByUrl(`/tabs/tab1/add-list/${list.id}`);
  }
}
