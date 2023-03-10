import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  @Output() searchTaxt = new EventEmitter<string>();
  addCross = false;
  searchValue = '';

  resetSesrchPlace() {
    this.searchValue = '';
    this.searchTaxt.emit(this.searchValue);
  }
  search(): void {
    this.searchTaxt.emit(this.searchValue);
  }
  
  ngDoCheck(): void {
    this.addCross = this.searchValue === '' ? false : true;
  }
}
