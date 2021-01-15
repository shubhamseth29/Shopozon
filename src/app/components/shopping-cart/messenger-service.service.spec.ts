import { TestBed } from '@angular/core/testing';

import { MessengerServiceService } from './messenger-service.service';

describe('MessengerServiceService', () => {
  let service: MessengerServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessengerServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
