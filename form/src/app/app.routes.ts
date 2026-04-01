import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'Home',
    loadComponent: () => import('./components/home/home').then((m) => m.Home),
  },
  {
    path: 'login',
    title: 'Login',
    loadComponent: () => import('./components/login/login').then((m) => m.Login),
  },
  {
    path: 'register',
    title: 'Register',
    loadComponent: () => import('./components/register/register').then((m) => m.Register),
  },
];
