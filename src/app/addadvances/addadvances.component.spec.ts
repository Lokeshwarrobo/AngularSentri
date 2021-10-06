import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddadvancesComponent } from './addadvances.component';

describe('AddadvancesComponent', () => {
  let component: AddadvancesComponent;
  let fixture: ComponentFixture<AddadvancesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddadvancesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddadvancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
