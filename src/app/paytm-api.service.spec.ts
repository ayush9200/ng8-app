import { TestBed } from '@angular/core/testing';

import { PaytmApiService } from './paytm-api.service';

describe('PaytmApiService', () => {
  let service: PaytmApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaytmApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
