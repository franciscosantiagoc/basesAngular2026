import { Routes } from '@angular/router';
import { CounterComponent } from './pages/counter/counter.component';
import { HomeComponent } from './pages/home/home.component';
import { HeroComponent } from './pages/hero/hero.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent, //carga normal
    //loadComponent: () => import('./pages/counter/counter.component').then((m) => m.CounterComponent) //carga lazy
    pathMatch: 'full'
  },
  {
    path: 'counter',
    component: CounterComponent, //carga normal
    pathMatch: 'full'
  },
  {
    path: 'hero',
    component: HeroComponent, //carga normal
    pathMatch: 'full'
  },
];
