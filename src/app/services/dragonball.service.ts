import { Service, signal } from '@angular/core';
import { Character } from '../interfaces/character.interface';

//@Injectable(providedIn: 'root') Utilizar en caso de injeccion a traves de constructor
@Service() //usar cuando usamos inyeccion de servicio con inject
export class DragonballService {
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
  ]);

  addCharacter(newCharacter: Character) {
    this.characters.update((characterArray) => [...characterArray, newCharacter]);
  }
}
