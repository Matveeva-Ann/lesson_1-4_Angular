import { Component } from '@angular/core';


@Component({
  selector: 'app-homework01',
  templateUrl: './homework01.component.html',
  styleUrls: ['./homework01.component.scss'],
})


export class Homework01Component {
  word: string ='';
  arrWord: string [] = [];
  texareaInput: string = '';
  stringWords: string = '';
  color: string = '';
  colors: string[] = ['lightblue', 'lightpink', 'lightgreen', 'mediumpurple'];
  errRed = false;
  errRedText = false;
  massage = '';
  massage2 = '';
  index: number = 0;

  constructor(){
    setInterval(() => {
      this.color = `background-color:${this.colors[this.index]};`;
      this.index++;
      if (this.index >= this.colors.length) {
        this.index = 0;
      }
    }, 10000);    
  }

  addWords(): void{
    if (this.arrWord.includes(this.word.trim())){
      this.massage = '* це слово вже є в списку "bad words"';
      this.errRed = true;
    }
    if (this.word.trim() !== '' &&  !this.arrWord.includes(this.word.trim())){ 
      this.arrWord.push(this.word.trim().toLowerCase());
      this.stringWords = this.arrWord.join(', ');
      this.word = '';
      this.errRed = false;
      this.massage = '';
    } else if (this.word.trim() === ''){
      this.massage = '* введіть, будь ласка, слово';
      this.errRed = true;
    }
  }

  resetAll():void{
    this.word = '';
    this.arrWord = [];
    this.stringWords = '';
    this.errRed = false;
    this.massage = '';
    this.texareaInput = '';
    this.massage2 = '';
    this.errRedText = false;
  }

  checkText(){
    if (this.texareaInput.trim() === ''){
      this.massage2 = '* введіть, будь ласка, текст';
      this.errRedText = true;
    }else{
      this.massage2 = '';
      this.errRedText = false;
    }
    let words = this.arrWord;
    let arrTextarea: string[] = this.texareaInput.split(' ');
    const wordRegexp = new RegExp ('(^[a-zA-Z0-9]+)$');
    const regExp = new RegExp('(^[^a-zA-Z0-9]*)([a-zA-Z0-9а-яА-Я0-9]+)([^a-zA-Z0-9]*)$');
    for (let i=0; i<arrTextarea.length; i++){
      let elem = arrTextarea[i];
      if (!wordRegexp.test(elem)){
        let newElem = elem.replace(regExp, "$2");
          if (words.includes(newElem.toLowerCase())){
            const stsrs = "*".repeat(newElem.length);
            arrTextarea[i] = elem.replace(regExp, `$1${stsrs}$3`);
          }
      }
        if (words.includes(elem.toLowerCase())){
          const stsrs = "*".repeat(elem.length);
          arrTextarea[i] = elem.replace(arrTextarea[i], `${stsrs}`);
        }
    }
    this.texareaInput = arrTextarea.join(' ');
  }
 
}