import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItdeclarationsComponent } from './itdeclarations.component';

describe('ItdeclarationsComponent', () => {
  let component: ItdeclarationsComponent;
  let fixture: ComponentFixture<ItdeclarationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItdeclarationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItdeclarationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
