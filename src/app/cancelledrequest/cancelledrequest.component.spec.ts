import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelledrequestComponent } from './cancelledrequest.component';

describe('CancelledrequestComponent', () => {
  let component: CancelledrequestComponent;
  let fixture: ComponentFixture<CancelledrequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CancelledrequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelledrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
