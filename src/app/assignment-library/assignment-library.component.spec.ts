import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentLibraryComponent } from './assignment-library.component';

describe('AssignmentLibraryComponent', () => {
  let component: AssignmentLibraryComponent;
  let fixture: ComponentFixture<AssignmentLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignmentLibraryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
