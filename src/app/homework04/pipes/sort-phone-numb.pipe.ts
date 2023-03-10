import { Pipe, PipeTransform } from '@angular/core';
import { Person } from '../homework04.component';

@Pipe({
  name: 'sortPhoneNumb'
})
export class SortPhoneNumbPipe implements PipeTransform {

  transform(arrNames: Person[], number: string): Person[] {
    if(!arrNames) return [];
    if(!number) return arrNames;
    if (number === 'downNumb'){
      return arrNames.sort((a,b) => {
        if(a.phoneNumber <b.phoneNumber){
          return -1;
        }else if(a.phoneNumber> b.phoneNumber){
          return 1;
        }
        return 0;
      })
    }
    return arrNames.sort((a,b) => {
      if(a.phoneNumber > b.phoneNumber){
        return -1;
      }else if(a.phoneNumber < b.phoneNumber){
        return 1;
      }
      return 0;
    })
    
  }
}
