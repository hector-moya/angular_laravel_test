import { TestBed } from '@angular/core/testing';

import { MediumsService } from './mediums.service';

describe('MediumsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MediumsService = TestBed.get(MediumsService);
    expect(service).toBeTruthy();
  });
});
