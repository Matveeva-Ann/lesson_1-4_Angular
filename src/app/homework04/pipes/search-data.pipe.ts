import { Pipe, PipeTransform } from '@angular/core';
import { filter } from 'rxjs';
import { Person } from '../homework04.component';
@Pipe({
  name: 'searchData'
})
export class SearchDataPipe implements PipeTransform {

  transform(arrPersons: Person[], searchData: string): Person[] {
    console.log(arrPersons)
    if (!arrPersons) return [];
    if(!searchData) return arrPersons;
    return arrPersons.filter(person => person.firstName.toLocaleLowerCase().includes(searchData.toLocaleLowerCase()) || 
                                       person.lastName.toLocaleLowerCase().includes(searchData.toLocaleLowerCase()) ||
                                       person.phoneNumber.toString().includes(searchData)
    )
  }
}
