import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyholidaycalenderComponent } from './myholidaycalender.component';

describe('MyholidaycalenderComponent', () => {
  let component: MyholidaycalenderComponent;
  let fixture: ComponentFixture<MyholidaycalenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyholidaycalenderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyholidaycalenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
