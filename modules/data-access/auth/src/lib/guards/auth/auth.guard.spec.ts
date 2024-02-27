import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService, authGuard } from 'auth-data-access';
import { of } from 'rxjs';

describe('authGuard', () => {
  it('should return true when user is not truthy', () => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
    });

    TestBed.overrideProvider(AuthService, {
      useValue: { email$: of(null) },
    });

    const guard = TestBed.runInInjectionContext(authGuard());
    guard.subscribe((isActivated) => {
      expect(isActivated).toBe(true);
    });
  });

  it('should not return true when user is truthy', () => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
    });

    TestBed.overrideProvider(AuthService, {
      useValue: { email$: of('mail@mail.com') },
    });
    const guard = TestBed.runInInjectionContext(authGuard());
    guard.subscribe((isActivated) => {
      expect(isActivated).not.toBe(true);
    });
  });
});
