import { TestBed } from '@angular/core/testing';

import { DeleteProjectsService } from './delete-projects.service';

describe('DeleteProjectsService', () => {
  let service: DeleteProjectsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeleteProjectsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
