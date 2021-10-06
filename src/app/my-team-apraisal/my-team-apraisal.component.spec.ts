import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTeamApraisalComponent } from './my-team-apraisal.component';

describe('MyTeamApraisalComponent', () => {
  let component: MyTeamApraisalComponent;
  let fixture: ComponentFixture<MyTeamApraisalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyTeamApraisalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyTeamApraisalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
