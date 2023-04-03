import { TestBed } from '@angular/core/testing';

import { SinglePrdService } from './single-prd.service';

describe('SinglePrdService', () => {
  let service: SinglePrdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SinglePrdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
