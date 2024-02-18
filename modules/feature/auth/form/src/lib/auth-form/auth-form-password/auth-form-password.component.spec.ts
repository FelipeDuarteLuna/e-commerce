import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthFormPasswordComponent } from './auth-form-password.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthFormComponent } from '../auth-form.component';

describe('AuthFormPasswordComponent', () => {
  let component: AuthFormPasswordComponent;
  let fixture: ComponentFixture<AuthFormPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AuthFormPasswordComponent,
        NoopAnimationsModule,
        RouterTestingModule,
      ],
      providers: [AuthFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AuthFormPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
