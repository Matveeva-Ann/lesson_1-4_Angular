import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Person } from '../homework04.component';

@Component({
  selector: 'app-add-phone',
  templateUrl: './add-phone.component.html',
  styleUrls: ['./add-phone.component.scss'],
})
export class AddPhoneComponent {
  @Output() addPersonNumb = new EventEmitter<Person>();
  @Input() dataEdit!: Person[];
  showForm = false;
  showMessage = false;
  idExists =false;
  firstName = '';
  lastName = '';
  phoneNumber = '';

  addPerson() {
    if (this.firstName !== '' && this.lastName !== '' && this.phoneNumber !== '') {
      const personNumb: Person = {
        id: 0,
        firstName: this.firstName,
        lastName: this.lastName,
        phoneNumber: this.phoneNumber,
      }
      if (this.idExists){
        personNumb.id = this.dataEdit[0].id;
        this.idExists =false;
      }else{
        personNumb.id = Math.round(Math.random()*10000);
      }
      this.addPersonNumb.emit(personNumb);
      this.resetForm();
    } else {
      this.showMessage = true;
    }
  }

  ngOnChanges(): void {
    if (typeof this.dataEdit !== 'undefined') {
      this.firstName = this.dataEdit[0].firstName;
      this.lastName = this.dataEdit[0].lastName;
      this.phoneNumber = this.dataEdit[0].phoneNumber;
      this.showForm = true;
      this.idExists = true;
    }
  }

  resetForm() {
    this.firstName = this.lastName = this.phoneNumber= '';
    this.showMessage = false;
    this.showForm = false;
  }
}
