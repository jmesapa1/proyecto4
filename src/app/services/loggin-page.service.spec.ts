import { TestBed } from '@angular/core/testing';

import { LogginPageService } from './loggin-page.service';

describe('LogginPageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LogginPageService = TestBed.get(LogginPageService);
    expect(service).toBeTruthy();
  });
});
