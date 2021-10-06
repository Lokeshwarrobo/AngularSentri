import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmyskillsComponent } from './addmyskills.component';

describe('AddmyskillsComponent', () => {
  let component: AddmyskillsComponent;
  let fixture: ComponentFixture<AddmyskillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddmyskillsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddmyskillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
