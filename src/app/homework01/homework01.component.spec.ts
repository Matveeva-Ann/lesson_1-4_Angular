import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Homework01Component } from './homework01.component';

describe('Homework01Component', () => {
  let component: Homework01Component;
  let fixture: ComponentFixture<Homework01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Homework01Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Homework01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
