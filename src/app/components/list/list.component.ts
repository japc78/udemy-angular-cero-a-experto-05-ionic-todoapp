import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, IonList } from '@ionic/angular';
import { TodoService } from '../../services/todo.service';
import { List } from '../../models/list.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {

  @Input() isFinished = true;

  // El componente hijo se captura los componentes Ionlist, como solo tiene uno sera el único, si hubiera mas seria un []
  @ViewChild( IonList ) listTag: IonList;

  constructor(
    public todoService: TodoService,
    private router: Router,
    public alertController: AlertController) {
  }

  ngOnInit() {}

  viewList(list: List) {
    this.router.navigateByUrl(`/tabs/tab${this.isFinished ? 2 : 1}/add-list/${list.id}`);
  }

  deleteList(list: List) {
    this.todoService.deleteList(list);
  }

  async editNameList(list: List) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Edit name',
      inputs: [
        {
          name: 'title',
          type: 'text',
          placeholder: 'Name list',
          value: list.title
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Test: Cancel action');
            this.listTag.closeSlidingItems();
          }
        },
        {
          text: 'Update',
          handler: (data) => {
            console.log(data);
            if (data.title.length === 0) {
              return;
            }

            list.title = data.title;
            this.todoService.saveStorage();
            this.listTag.closeSlidingItems();
          }
        }
      ]
    });

    alert.present();
  }
}
