import { TestBed } from '@angular/core/testing';

import { AulasStorageService } from './aulas-storage.service';

describe('AulasStorageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AulasStorageService = TestBed.get(AulasStorageService);
    expect(service).toBeTruthy();
  });
});
