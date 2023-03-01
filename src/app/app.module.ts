import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Homework01Component } from './homework01/homework01.component';
import { Homework02Component } from './homework02/homework02.component';
import { Homework03Component } from './homework03/homework03.component';
import { TableComponent } from './homework03/table/table.component';
// import { TaskListComponent } from './task-list/task-list.component';
// import { ChildComponent } from './task-list/child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    Homework01Component,
    Homework02Component,
    Homework03Component,
    TableComponent,
    // TaskListComponent,
    // ChildComponent,
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
