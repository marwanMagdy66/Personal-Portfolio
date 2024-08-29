import { TestBed } from '@angular/core/testing';

import { DeleteSkillsService } from './delete-skills.service';

describe('DeleteSkillsService', () => {
  let service: DeleteSkillsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeleteSkillsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
