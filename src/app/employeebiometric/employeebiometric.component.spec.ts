import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeebiometricComponent } from './employeebiometric.component';

describe('EmployeebiometricComponent', () => {
  let component: EmployeebiometricComponent;
  let fixture: ComponentFixture<EmployeebiometricComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeebiometricComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeebiometricComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
