import { TestBed } from '@angular/core/testing';

import { MailServiceApiService } from './mail-service-api.service';

describe('MailServiceApiService', () => {
  let service: MailServiceApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MailServiceApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
