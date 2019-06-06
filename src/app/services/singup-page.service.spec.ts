import { TestBed } from '@angular/core/testing';

import { SingupPageService } from './singup-page.service';

describe('SingupPageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SingupPageService = TestBed.get(SingupPageService);
    expect(service).toBeTruthy();
  });
});
