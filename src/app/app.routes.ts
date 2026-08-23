import { Routes } from '@angular/router';
import { CounterComponent } from './pages/counter/counter.component';
import { HomeComponent } from './pages/home/home.component';
import { HeroComponent } from './pages/hero/hero.component';
import { Page404Component } from './pages/page404/page404.component';
import { DragonballPageComponent } from './pages/dragonball/dragonball-page.component';
import { DragonballSuperPageComponent } from './pages/dragonball-super/dragonball-super-page.component';

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
  {
    path: 'dragonball',
    component: DragonballPageComponent,
    pathMatch: 'full'
  },
  {
    path: 'dragonball-super',
    component: DragonballSuperPageComponent,
    pathMatch: 'full'
  },
  {
    path: '404',
    component: Page404Component,
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '404',
  }
];
