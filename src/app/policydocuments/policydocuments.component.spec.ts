import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicydocumentsComponent } from './policydocuments.component';

describe('PolicydocumentsComponent', () => {
  let component: PolicydocumentsComponent;
  let fixture: ComponentFixture<PolicydocumentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PolicydocumentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PolicydocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
