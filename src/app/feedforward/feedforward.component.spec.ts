import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedforwardComponent } from './feedforward.component';

describe('FeedforwardComponent', () => {
  let component: FeedforwardComponent;
  let fixture: ComponentFixture<FeedforwardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedforwardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedforwardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
