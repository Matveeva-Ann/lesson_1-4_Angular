import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../homework03.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  @Input()  tasksArr!: Task[];
  @Output() taskChange = new EventEmitter<string>();
  @Output() indexChange = new EventEmitter<number>();

  addCheck(index: number): void {
    this.tasksArr[index].status = !this.tasksArr[index].status;
  }
  deleteTask(index: number): void {
    this.tasksArr.splice(index, 1);
  }
  editTask(index: number): void {
    const task = this.tasksArr[index].task;
    this.taskChange.emit(task);
    this.indexChange.emit(index);
  }
}
