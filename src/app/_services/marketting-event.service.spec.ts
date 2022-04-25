import { TestBed } from '@angular/core/testing';

import { MarkettingEventService } from './marketting-event.service';

describe('MarkettingEventService', () => {
  let service: MarkettingEventService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MarkettingEventService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
