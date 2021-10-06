import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllexitprocedureComponent } from './allexitprocedure.component';

describe('AllexitprocedureComponent', () => {
  let component: AllexitprocedureComponent;
  let fixture: ComponentFixture<AllexitprocedureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllexitprocedureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllexitprocedureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
