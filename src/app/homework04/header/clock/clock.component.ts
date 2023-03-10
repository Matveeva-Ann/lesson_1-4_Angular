import { Component } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent {
  time!: Date;
  ngOnInit(): void {
    setInterval(()=>{
      this.time = new Date;
    },1000)
  }
}
