import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'root',
  },
  {
    path: 'root',
    loadComponent: () =>
      import('./root/root.component').then((c) => c.RootComponent),
  },
];
