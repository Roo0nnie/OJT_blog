import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Weekly1Component } from './weekly1.component';

describe('Weekly1Component', () => {
  let component: Weekly1Component;
  let fixture: ComponentFixture<Weekly1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Weekly1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Weekly1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
