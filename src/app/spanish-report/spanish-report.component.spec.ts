import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpanishReportComponent } from './spanish-report.component';

describe('SpanishReportComponent', () => {
  let component: SpanishReportComponent;
  let fixture: ComponentFixture<SpanishReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpanishReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpanishReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
