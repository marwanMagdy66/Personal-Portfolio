import { TestBed } from '@angular/core/testing';

import { SendEmailsService } from './send-emails.service';

describe('SendEmailsService', () => {
  let service: SendEmailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SendEmailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
