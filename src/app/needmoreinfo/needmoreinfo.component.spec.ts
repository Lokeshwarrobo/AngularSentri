import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeedmoreinfoComponent } from './needmoreinfo.component';

describe('NeedmoreinfoComponent', () => {
  let component: NeedmoreinfoComponent;
  let fixture: ComponentFixture<NeedmoreinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NeedmoreinfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NeedmoreinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
