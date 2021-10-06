import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamincidentsComponent } from './teamincidents.component';

describe('TeamincidentsComponent', () => {
  let component: TeamincidentsComponent;
  let fixture: ComponentFixture<TeamincidentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamincidentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamincidentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
