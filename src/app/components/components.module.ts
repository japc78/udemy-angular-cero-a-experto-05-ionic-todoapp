import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { IonicModule } from '@ionic/angular';
import { TodoService } from '../services/todo.service';



@NgModule({
  declarations: [
    ListComponent,
  ],
  exports: [
    ListComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
