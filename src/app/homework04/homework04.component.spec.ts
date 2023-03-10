import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Homework04Component } from './homework04.component';

describe('Homework04Component', () => {
  let component: Homework04Component;
  let fixture: ComponentFixture<Homework04Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Homework04Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Homework04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
