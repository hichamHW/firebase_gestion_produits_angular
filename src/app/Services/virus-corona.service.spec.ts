import { TestBed } from '@angular/core/testing';

import { VirusCoronaService } from './virus-corona.service';

describe('VirusCoronaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VirusCoronaService = TestBed.get(VirusCoronaService);
    expect(service).toBeTruthy();
  });
});
