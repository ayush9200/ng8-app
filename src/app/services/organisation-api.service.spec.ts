import { TestBed } from '@angular/core/testing';

import { OrganisationApiService } from './organisation-api.service';

describe('OrganisationApiService', () => {
  let service: OrganisationApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrganisationApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
