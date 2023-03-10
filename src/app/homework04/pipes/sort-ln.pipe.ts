import { Pipe, PipeTransform } from '@angular/core';
import { Person } from '../homework04.component';

@Pipe({
  name: 'sortLn'
})
export class SortLnPipe implements PipeTransform {

  transform(arrNames: Person[], names: string): Person[] {
    if(!arrNames) return [];
    if(!names) return arrNames;
    if (names === 'downLn'){
      return arrNames.sort((a,b) => {
        if(a.lastName <b.lastName){
          return -1;
        }else if(a.lastName> b.lastName){
          return 1;
        }
        return 0;
      })
    }
    return arrNames.sort((a,b) => {
      if(a.lastName > b.lastName){
        return -1;
      }else if(a.lastName < b.lastName){
        return 1;
      }
      return 0;
    })
    
  }

}
