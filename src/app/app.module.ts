import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Homework01Component } from './homework01/homework01.component';
import { Homework02Component } from './homework02/homework02.component';
import { Homework03Component } from './homework03/homework03.component';
import { TableComponent } from './homework03/table/table.component';
import { Homework04Component } from './homework04/homework04.component';
import { HeaderComponent } from './homework04/header/header.component';
import { SearchComponent } from './homework04/search/search.component';
import { AddPhoneComponent } from './homework04/add-phone/add-phone.component';
import { SortNamesPipe } from './homework04/pipes/sort-names.pipe';
import { SearchDataPipe } from './homework04/pipes/search-data.pipe';
import { SortLnPipe } from './homework04/pipes/sort-ln.pipe';
import { SortPhoneNumbPipe } from './homework04/pipes/sort-phone-numb.pipe';
import { ClockComponent } from './homework04/header/clock/clock.component';
// import { SearchDataPipe } from './homework04/search/serch-data.pipe';
// import { SerchDataPipe } from './search/serch-data.pipe';

@NgModule({
  declarations: [
    AppComponent,
    Homework01Component,
    Homework02Component,
    Homework03Component,
    TableComponent,
    Homework04Component,
    HeaderComponent,
    SearchComponent,
    AddPhoneComponent,
    SortNamesPipe,
    SearchDataPipe,
    SortLnPipe,
    SortPhoneNumbPipe,
    ClockComponent,
    // SearchDataPipe,
    // SerchDataPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
