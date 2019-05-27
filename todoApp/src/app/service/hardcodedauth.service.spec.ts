import { TestBed } from '@angular/core/testing';

import { HardcodedauthService } from './hardcodedauth.service';

describe('HardcodedauthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HardcodedauthService = TestBed.get(HardcodedauthService);
    expect(service).toBeTruthy();
  });
});
