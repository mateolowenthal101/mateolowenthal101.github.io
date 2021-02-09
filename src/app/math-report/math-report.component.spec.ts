import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MathReportComponent } from './math-report.component';

describe('MathReportComponent', () => {
  let component: MathReportComponent;
  let fixture: ComponentFixture<MathReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MathReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MathReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
