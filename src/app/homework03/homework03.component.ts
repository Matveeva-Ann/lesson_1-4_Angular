import { ChangeDetectionStrategy, Component } from '@angular/core';

export interface Task {
  task: string;
  status: boolean;
}

@Component({
  selector: 'app-homework03',
  templateUrl: './homework03.component.html',
  styleUrls: ['./homework03.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Homework03Component {
  changingName = false;
  newName = '';
  newUserName = 'Guest';
  task = '';
  tasksArr: Task[] = [];
  countTasks = 0;
  editStatus = true;
  index!: number;

  stopPropagation(event: Event) {
    event.stopPropagation();
  }
  changingUserName() {
   this.newUserName = this.newName !== '' ? this.newName : 'Guest';
    this.newName = '';
    this.changingName = false;
  }
  addTask(): void {
    if (this.task.trim() === ''){
      return;
    }else{
      if (this.editStatus) {
        const taskObj: Task = {
          task: this.task,
          status: true,
        };
        this.tasksArr.unshift(taskObj);
        this.task = '';
      } 
      else {
        this.tasksArr[this.index].task = this.task;
        this.task = '';
        this.editStatus = true;
      }
    } 
  }
  ngDoCheck(): void {
    this.countTasks = this.tasksArr.length;    
  }
  taskChange(task: string): void {
    this.task = task;
    this.editStatus = false;
  }
  indexChange(count: number): void {
    this.index = count;
  }
}
