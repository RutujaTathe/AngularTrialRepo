import { TestBed } from '@angular/core/testing';

import { HopitalserviceService } from './hopitalservice.service';

describe('HopitalserviceService', () => {
  let service: HopitalserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HopitalserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
