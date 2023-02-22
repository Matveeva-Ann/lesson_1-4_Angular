import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Homework02Component } from './homework02.component';

describe('Homework02Component', () => {
  let component: Homework02Component;
  let fixture: ComponentFixture<Homework02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Homework02Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Homework02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
