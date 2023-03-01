import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Homework03Component } from './homework03.component';

describe('Homework03Component', () => {
  let component: Homework03Component;
  let fixture: ComponentFixture<Homework03Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Homework03Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Homework03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
