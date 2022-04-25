import { TestBed } from '@angular/core/testing';

import { Directory2Service } from './directory2.service';

describe('Directory2Service', () => {
  let service: Directory2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Directory2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
