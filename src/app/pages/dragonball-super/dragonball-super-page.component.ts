import { Component, computed, signal } from '@angular/core';
import { CharacterListComponent } from "../../components/dragonball/character-list/character-list.component";
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dragonball-super',
  templateUrl: './dragonball-super-page.component.html',
  imports: [CharacterListComponent],
})
export class DragonballSuperPageComponent {
  name = signal("");
  power = signal(0);
  showError = signal("");

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

  addCharacter() {
    if(!this.name() || !this.power()) {
      this.showError.set("Debes rellenar todos los campos")
      return;
    }

    const newCharacter: Character = {
      id: this.characters().length + 1,
      name: this.name(),
      power: this.power()
    }

    this.characters.update((characterArray)=>[
      ...characterArray,
      newCharacter
    ])

    this.resetFields();
  }

  resetFields() {
    this.showError.set("");
    this.name.set("");
    this.power.set(0);
  }
}
