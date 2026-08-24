import { Character } from './../../../interfaces/character.interface';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'dragonball-character-add',
  imports: [],
  templateUrl: './character-add.component.html',
})
export class CharacterAddComponent {
  name = signal("");
  power = signal(0);
  showError = signal("");

  addCharacter() {
    if(!this.name() || !this.power()) {
      this.showError.set("Debes rellenar todos los campos")
      return;
    }

    const newCharacter: Character = {
      id: 1000,
      //id: this.characters().length + 1,
      name: this.name(),
      power: this.power()
    }

    /* this.characters.update((characterArray)=>[
      ...characterArray,
      newCharacter
    ]) */
   console.log(newCharacter)

    this.resetFields();
  }

  resetFields() {
    this.showError.set("");
    this.name.set("");
    this.power.set(0);
  }
}
