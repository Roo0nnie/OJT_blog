import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Week13Component } from './week-13.component';

describe('Week13Component', () => {
  let component: Week13Component;
  let fixture: ComponentFixture<Week13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Week13Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Week13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
