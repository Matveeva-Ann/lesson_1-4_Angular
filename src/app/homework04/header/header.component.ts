import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})

export class HeaderComponent {
  @Input() amountNumbers!: number;
  showFieldNameRecord = false;
  userName = 'write your name here...';
  writtenName = '';
  ngOnInit(): void {
    const getsName = localStorage.getItem('userName');
    if (getsName) {
      this.userName = JSON.parse(getsName);
    } else {
      this.userName = 'write your name here...';
    }
  }

  hideFieldNameRecord() {
    this.userName = this.writtenName !== '' ? this.writtenName : 'write your name here...';
    localStorage.setItem('userName', JSON.stringify(this.userName));
    this.showFieldNameRecord = false;
  }
  stopPropagation(event: Event): void {
    event.stopPropagation();
  }
}
