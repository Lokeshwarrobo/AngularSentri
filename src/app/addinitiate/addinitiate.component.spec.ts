import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddinitiateComponent } from './addinitiate.component';

describe('AddinitiateComponent', () => {
  let component: AddinitiateComponent;
  let fixture: ComponentFixture<AddinitiateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddinitiateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddinitiateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
