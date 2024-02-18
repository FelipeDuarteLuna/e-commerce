import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { AuthFormComponent } from '../auth-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'lib-auth-form-password',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatInputModule, ReactiveFormsModule],
  templateUrl: './auth-form-password.component.html',
  styleUrl: './auth-form-password.component.scss',
})
export class AuthFormPasswordComponent {
  control = inject(AuthFormComponent).form.controls.password;
}
