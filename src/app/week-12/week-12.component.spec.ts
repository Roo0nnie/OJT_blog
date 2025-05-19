import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Week12Component } from './week-12.component';

describe('Week12Component', () => {
  let component: Week12Component;
  let fixture: ComponentFixture<Week12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Week12Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Week12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
