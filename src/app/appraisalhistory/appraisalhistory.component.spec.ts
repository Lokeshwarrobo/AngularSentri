import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppraisalhistoryComponent } from './appraisalhistory.component';

describe('AppraisalhistoryComponent', () => {
  let component: AppraisalhistoryComponent;
  let fixture: ComponentFixture<AppraisalhistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppraisalhistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppraisalhistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
