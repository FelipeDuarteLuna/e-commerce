import { AuthFormComponent } from './../auth-form.component';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-auth-form-email',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './auth-form-email.component.html',
  styleUrl: './auth-form-email.component.scss',
})
export class AuthFormEmailComponent implements OnInit {
  constructor(private authformComponent: AuthFormComponent) {}

  ngOnInit(): void {
    // eslint-disable-next-line no-console
    console.log(this.authformComponent.form.value);
  }
}
