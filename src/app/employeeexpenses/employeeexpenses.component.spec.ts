import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeexpensesComponent } from './employeeexpenses.component';

describe('EmployeeexpensesComponent', () => {
  let component: EmployeeexpensesComponent;
  let fixture: ComponentFixture<EmployeeexpensesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeexpensesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeexpensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
