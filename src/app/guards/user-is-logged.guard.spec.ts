import { TestBed } from '@angular/core/testing';

import { UserIsLoggedGuard } from './user-is-logged.guard';

describe('UserIsLoggedGuard', () => {
  let guard: UserIsLoggedGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UserIsLoggedGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
