import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Week14Component } from './week-14.component';

describe('Week14Component', () => {
  let component: Week14Component;
  let fixture: ComponentFixture<Week14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Week14Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Week14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
