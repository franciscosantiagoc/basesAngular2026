import { effect, Service, signal } from '@angular/core';
import { Character } from '../interfaces/character.interface';

function loadFromLocalStorage(): Character[] {
  const characters = localStorage.getItem("characters");

  return characters ?  JSON.parse(characters) : [];
}

//@Injectable(providedIn: 'root') Utilizar en caso de injeccion a traves de constructor
@Service() //usar cuando usamos inyeccion de servicio con inject
export class DragonballService {
  characters = signal<Character[]>(loadFromLocalStorage());

  saveToLocalStorage = effect(()=>{
    console.log(`Character count list ${this.characters().length}`);
    localStorage.setItem("characters", JSON.stringify(this.characters()));
  })

  addCharacter(newCharacter: Character) {
    this.characters.update((characterArray) => [...characterArray, newCharacter]);
  }
}
