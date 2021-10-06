import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConferencebookingComponent } from './conferencebooking.component';

describe('ConferencebookingComponent', () => {
  let component: ConferencebookingComponent;
  let fixture: ComponentFixture<ConferencebookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConferencebookingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConferencebookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
