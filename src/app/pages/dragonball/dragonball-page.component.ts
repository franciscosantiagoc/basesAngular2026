import { NgClass } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  imports: [NgClass],
  templateUrl: './dragonball-page.component.html',
  styleUrl: './dragonball-page.component.scss',
})
export class DragonballPageComponent {
  name = signal("Gohan");
  power = signal(500);

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
    {
      id: 4,
      name: 'Yamcha',
      power: 700,
    },
    {
      id: 5,
      name: 'Chaos',
      power: 400,
    },
  ]);

  characterClasses = computed(() =>
    Object.fromEntries(
      this.characters().map((character) => [
        character.id,
        character.power >= 9000
          ? 'text-danger'
          : character.power > 5000
            ? 'text-warning'
            : character.power < 1000
              ? 'text-muted'
              : '',
      ]),
    ),
  );
}
