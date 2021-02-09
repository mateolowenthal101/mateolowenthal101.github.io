import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpanishLessonsComponent } from './spanish-lessons.component';

describe('SpanishLessonsComponent', () => {
  let component: SpanishLessonsComponent;
  let fixture: ComponentFixture<SpanishLessonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpanishLessonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpanishLessonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
