import { Component, signal } from '@angular/core';

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

  getHeroDescription() {
    return `${this.name()} tiene ${this.age()} años`;
  }

  getUpperCaseName() {
    return this.name().toUpperCase();
  }

  changeHero() {
    this.name.set('Frank');
  }

  changeAge() {
    this.age.set(29);
  }

  resetForm() {
    this.name.set(this.defaultName);
    this.age.set(this.defaultAge);
  }
}
