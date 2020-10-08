import { TestBed } from '@angular/core/testing';

import { JounaryService } from './jounary.service';

describe('JounaryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JounaryService = TestBed.get(JounaryService);
    expect(service).toBeTruthy();
  });
});
