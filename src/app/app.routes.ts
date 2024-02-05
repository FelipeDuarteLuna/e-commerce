import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    loadChildren: () => import('home').then((m) => m.HomeModule),
  },
  {
    path: 'product',
    loadChildren: () =>
      import('product-detail').then((m) => m.productDetailRoutes),
  },
  {
    path: 'auth',
    loadChildren: () => import('auth-form').then((m) => m.authFormRoutes),
  },
];
