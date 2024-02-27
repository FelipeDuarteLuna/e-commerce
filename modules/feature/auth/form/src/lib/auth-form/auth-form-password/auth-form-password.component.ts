import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { AuthFormComponent } from '../auth-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from 'modules/data-access/auth/src/lib/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'lib-auth-form-password',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatInputModule, ReactiveFormsModule],
  templateUrl: './auth-form-password.component.html',
  styleUrl: './auth-form-password.component.scss',
})
export class AuthFormPasswordComponent {
  email = inject(AuthFormComponent).form.controls.email.value;
  control = inject(AuthFormComponent).form.controls.password;
  authService = inject(AuthService);
  router = inject(Router);

  login(): void {
    this.authService.setEmail(this.email);
    this.router.navigate(['/']);
  }
}
