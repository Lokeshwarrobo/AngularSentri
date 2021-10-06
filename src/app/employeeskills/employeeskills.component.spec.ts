import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeskillsComponent } from './employeeskills.component';

describe('EmployeeskillsComponent', () => {
  let component: EmployeeskillsComponent;
  let fixture: ComponentFixture<EmployeeskillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeskillsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeskillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
