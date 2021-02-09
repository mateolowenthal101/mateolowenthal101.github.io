import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnglishLessonsComponent } from './english-lessons.component';

describe('EnglishLessonsComponent', () => {
  let component: EnglishLessonsComponent;
  let fixture: ComponentFixture<EnglishLessonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnglishLessonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnglishLessonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
