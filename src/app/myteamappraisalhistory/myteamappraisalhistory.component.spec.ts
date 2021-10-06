import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyteamappraisalhistoryComponent } from './myteamappraisalhistory.component';

describe('MyteamappraisalhistoryComponent', () => {
  let component: MyteamappraisalhistoryComponent;
  let fixture: ComponentFixture<MyteamappraisalhistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyteamappraisalhistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyteamappraisalhistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
