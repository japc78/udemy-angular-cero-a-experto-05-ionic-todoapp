import { Pipe, PipeTransform } from '@angular/core';
import { List } from '../models/list.model';

@Pipe({
  name: 'filterFinished',
  // Se indica impuro par que detecte los cambios no solo en el componente, sino general de la app.
  pure: false
})
export class FilterFinishedPipe implements PipeTransform {

  transform(lists: List[], isFinished: boolean = true): List[] {
    return lists.filter( list => list.isFinished === isFinished);
  }

}
