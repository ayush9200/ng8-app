import { TestBed } from '@angular/core/testing';

import { StateApiService } from './state-api.service';

describe('StateApiService', () => {
  let service: StateApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StateApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
