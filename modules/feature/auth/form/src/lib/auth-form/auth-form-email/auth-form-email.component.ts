import { AuthFormComponent } from './../auth-form.component';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'lib-auth-form-email',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  templateUrl: './auth-form-email.component.html',
  styleUrl: './auth-form-email.component.scss',
})
export class AuthFormEmailComponent implements OnInit {
  control!: FormControl<string>;

  constructor(private authformComponent: AuthFormComponent) {}

  ngOnInit(): void {
    // eslint-disable-next-line no-console
    console.log(this.authformComponent.form.value);

    this.control = this.authformComponent.form.controls.email;
  }
}
