import { Component, Input } from '@angular/core';
import { elementAt } from 'rxjs';
export interface Person {
  id: number;
  firstName: string;
  lastName: string;
  phoneNumber: string;
}

@Component({
  selector: 'app-homework04',
  templateUrl: './homework04.component.html',
  styleUrls: ['./homework04.component.scss'],
})
export class Homework04Component {
  phonebook: Person[] = [];
  amountNumbers = 0;
  showArrow = false;
  showArrowLn = false;
  showArrowNumb = false;
  changeArrow = true;
  changeArrowLn = true;
  changeArrowNumb = true;
  color = '';
  idColor = 0;
  dataEdit!: Person[];
  searchData = '';
  type = 'up';
  typeLn = 'upLn';
  typeNumb = 'upNumb';
  backgroundColors = ['lightblue', 'lightpink', 'lightgreen', 'mediumpurple', 'lightsalmon', 'lemonchiffon', 'lightgray',];
  // backgroundColors = ['linear-gradient(to right, #ffdde1, #ee9ca7)', 'linear-gradient(to right, #99f2c8, #1f4037)', ' linear-gradient(to right, #EAEAEA, #DBDBDB, #F2F2F2, #ADA996)', 'linear-gradient(to right, #B06AB3, #4568DC)', ' linear-gradient(to right, #fbc7d4, #9796f0)', 'lemonchiffon', 'lightgray',];
  
  ngOnInit(): void {
    if (this.localStorageGet()){
      this.phonebook = this.localStorageGet();
    }
  }

  addPerson(dataPerson: Person): void {
    const index = this.phonebook.findIndex((elem)=> elem.id === dataPerson.id);
    if (index !== -1){
      this.phonebook[index].firstName = dataPerson.firstName;
      this.phonebook[index].lastName = dataPerson.lastName;
      this.phonebook[index].phoneNumber = dataPerson.phoneNumber;
    }
    else {
      this.phonebook.push(dataPerson);
      this.amountNumbers = this.phonebook.length;
    }
    this.localStorageSet();
  }

  deletePersonNumb(id: number) {
    this.phonebook = this.phonebook.filter((elem) => elem.id !== id);
    this.localStorageSet()
  }
  editPersonNumb(id: number) {
    this.dataEdit = this.phonebook.filter((elem) => elem.id === id);
  }
  stopPropagation(event: Event):void{
    event.stopPropagation();
  }


  searchTaxt(event:string){
    this.searchData = event;
  }
  arrowBtn(type:string){
    this.changeArrow = !this.changeArrow;
    this.type = type;
  }
  arrowBtnLn(typeLn:string){
    this.changeArrowLn = !this.changeArrowLn;
    this.typeLn = typeLn;
  }
  arrowBtnNumb(typeNumb:string){
    this.changeArrowNumb = !this.changeArrowNumb;
    this.typeNumb = typeNumb;
  }


  localStorageSet(){
    localStorage.setItem('phonebook', JSON.stringify(this.phonebook))
  }
  localStorageGet(){
    const phoneb = localStorage.getItem("phonebook");
    if (phoneb){
      console.log(JSON.parse(phoneb))
      return this.phonebook = JSON.parse(phoneb);
    }else{
      return null;
    }
  }

  constructor() {
    setInterval(() => {
      this.color = `background-color:${this.backgroundColors[this.idColor]};`;
      this.idColor++;
      if (this.idColor >= this.backgroundColors.length) {
        this.idColor = 0;
      }
    }, 20000);
  }
  ngDoCheck(): void {
    this.amountNumbers = this.phonebook.length;    
  }
}
