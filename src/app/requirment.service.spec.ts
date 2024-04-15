import { TestBed } from '@angular/core/testing';

import { RequirmentService } from './requirment.service';

describe('RequirmentService', () => {
  let service: RequirmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequirmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
