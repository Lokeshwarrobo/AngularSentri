import { TestBed } from '@angular/core/testing';

import { ServicereqService } from './servicereq.service';

describe('ServicereqService', () => {
  let service: ServicereqService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicereqService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
