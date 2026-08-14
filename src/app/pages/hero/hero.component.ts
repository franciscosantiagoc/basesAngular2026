import { Component, computed, signal } from '@angular/core';

@Component({
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.scss',
})
export class HeroComponent {
  defaultName = 'Francisco';
  defaultAge = 28;
  protected readonly name = signal(this.defaultName);
  protected readonly age = signal(this.defaultAge);

  heroDescription = computed(() => this.name() + ' tiene ' + this.age() + ' años'); //Se recomienda su uso cuando se necesita un valor reactivo, ya que se ejecuta solo cuando cambia alguna de las señales que lo componen

  /* getHeroDescription() { //Se recomienda su uso solo en eventos, ya que se ejecuta cada vez que se llama y no es reactivo
    return `${this.name()} tiene ${this.age()} años`;
  } */

  /* getUpperCaseName() {
    return this.name().toUpperCase();
  } */

  capitalizedName = computed(() => this.name().toUpperCase());

  changeHero() {
    this.name.set('Frank');
  }

  changeAge() {
    this.age.set(20);
  }

  resetForm() {
    this.name.set(this.defaultName);
    this.age.set(this.defaultAge);
  }
}
