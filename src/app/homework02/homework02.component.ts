import { Component } from '@angular/core';

export interface User {
  login: string;
  password: string;
  email: string;
}

@Component({
  selector: 'app-homework02',
  templateUrl: './homework02.component.html',
  styleUrls: ['./homework02.component.scss'],
})
export class Homework02Component {
  formLog: string = '';
  formPass: string = '';
  formEmail: string = '';
  userArr: User[] = [];
  editIndex!: number;
  editStatus = false;

  isRegLogin = true;
  isRegPass = true;
  isRegEmail = true;

  validateLogin(login: string): boolean {
    const regLog = new RegExp('\\w+');
    return regLog.test(login);
  }
  
  validatePassword(password: string): boolean {
    const regPass = new RegExp('\\S{6,}');
    return regPass.test(password);
  }
  
  validateEmail(email: string): boolean {
    const regEmail = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
    return regEmail.test(email);
  }

  changeVariable(): void {
    this.isRegLogin = this.validateLogin(this.formLog);
    this.isRegPass = this.validatePassword(this.formPass);
    this.isRegEmail = this.validateEmail(this.formEmail);
  }
  resetForm(): void {
    this.formLog = '';
    this.formPass = '';
    this.formEmail = '';
  }

  takingDataForm(): void {
    this.changeVariable();
    if (
      this.validateLogin(this.formLog) &&
      this.validatePassword(this.formPass) &&
      this.validateEmail(this.formEmail)
    ) {
      const userObj = {
        login: this.formLog,
        password: this.formPass,
        email: this.formEmail,
      };
      this.userArr.push(userObj);
      this.resetForm();
    } 
  }
  deleteUser(index: number): void {
    this.userArr.splice(index, 1);
  }

  editUser(index: number): void {
    this.editIndex = index;
    this.formLog = this.userArr[index].login;
    this.formPass = this.userArr[index].password;
    this.formEmail = this.userArr[index].email;
    this.editStatus = true;
  }

  updateName(): void {
    this.changeVariable();
    if (
      this.validateLogin(this.formLog) &&
      this.validatePassword(this.formPass) &&
      this.validateEmail(this.formEmail)
    ) {
      this.userArr[this.editIndex].login = this.formLog;
      this.userArr[this.editIndex].password = this.formPass;
      this.userArr[this.editIndex].email = this.formEmail;
      this.editStatus = false;
      this.resetForm();
    } 
  }
}

