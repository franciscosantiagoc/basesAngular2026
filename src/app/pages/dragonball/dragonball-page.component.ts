import { Component, signal } from '@angular/core';

interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  templateUrl: './dragonball-page.component.html',
  styleUrl: './dragonball-page.component.scss',
})
export class DragonballPageComponent {
  characters = signal<Character[]>([
    {
      id: 1,
      name: 'Goku',
      power: 9001,
    },
    {
      id: 2,
      name: 'Vegeta',
      power: 8600,
    },
    {
      id: 3,
      name: 'Piccoro',
      power: 3000,
    },
  ])
}
