import { TestBed } from '@angular/core/testing';

import { IsLogonGuard } from './is-logon.guard';

describe('IsLogonGuard', () => {
  let guard: IsLogonGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(IsLogonGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
