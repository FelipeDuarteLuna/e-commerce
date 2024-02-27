import { Route } from '@angular/router';
import { AuthFormComponent } from './auth-form/auth-form.component';
import { authGuard } from 'auth-data-access';

export const authFormRoutes: Route[] = [
  {
    path: '',
    canActivate: [authGuard()],
    component: AuthFormComponent,
    children: [
      {
        path: 'email',
        loadComponent: () =>
          import('./auth-form/auth-form-email/auth-form-email.component').then(
            (m) => m.AuthFormEmailComponent
          ),
      },
      {
        path: 'password',
        loadComponent: () =>
          import(
            './auth-form/auth-form-password/auth-form-password.component'
          ).then((m) => m.AuthFormPasswordComponent),
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'email',
      },
      {
        path: '**',
        redirectTo: 'email',
      },
    ],
  },
];
