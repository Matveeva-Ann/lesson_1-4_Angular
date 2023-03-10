import { Pipe, PipeTransform } from '@angular/core';
import { Person } from '../homework04.component';

@Pipe({
  name: 'sortNames'
})
export class SortNamesPipe implements PipeTransform {

  transform(arrNames: Person[], names: string): Person[] {
    if(!arrNames) return [];
    if(!names) return arrNames;
    if (names === 'down'){
      return arrNames.sort((a,b) => {
        if(a.firstName <b.firstName){
          return -1;
        }else if(a.firstName> b.firstName){
          return 1;
        }
        return 0;
      })
    }
    return arrNames.sort((a,b) => {
      if(a.firstName > b.firstName){
        return -1;
      }else if(a.firstName < b.firstName){
        return 1;
      }
      return 0;
    })
    
  }

}
