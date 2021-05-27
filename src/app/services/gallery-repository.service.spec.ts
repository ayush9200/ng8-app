import { TestBed } from '@angular/core/testing';

import { GalleryRepositoryService } from './gallery-repository.service';

describe('GalleryRepositoryService', () => {
  let service: GalleryRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GalleryRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
