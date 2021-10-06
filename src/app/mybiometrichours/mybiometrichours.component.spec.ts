import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MybiometrichoursComponent } from './mybiometrichours.component';

describe('MybiometrichoursComponent', () => {
  let component: MybiometrichoursComponent;
  let fixture: ComponentFixture<MybiometrichoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MybiometrichoursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MybiometrichoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
