import { TestBed } from '@angular/core/testing';

import { SubdirectoryService } from './subdirectory.service';

describe('SubdirectoryService', () => {
  let service: SubdirectoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubdirectoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
