import { TestBed } from '@angular/core/testing';

import { ERecordsService } from './e-records.service';

describe('ERecordsService', () => {
  let service: ERecordsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ERecordsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
