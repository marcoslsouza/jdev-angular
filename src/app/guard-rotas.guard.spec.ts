import { TestBed } from '@angular/core/testing';

import { GuardRotasGuard } from './guard-rotas.guard';

describe('GuardRotasGuard', () => {
  let guard: GuardRotasGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GuardRotasGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
