import { TestBed } from '@angular/core/testing';

import { LogInApiService } from './log-in-api.service';

describe('LogInApiService', () => {
  let service: LogInApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogInApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
