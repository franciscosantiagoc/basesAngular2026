import { Component, signal } from "@angular/core";

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.scss'
})
export class CounterComponent {
  defaultCounter: number = 20;
  counter:number = this.defaultCounter;
  counterSignal = signal(this.defaultCounter);

  increaseBy() {
    this.counter += 1;
    this.counterSignal.update((currentValue) => currentValue + 1);
  }

  decreaseBy() {
    this.counter= this.counter === 0 ? this.counter: this.counter - 1;
    this.counterSignal.update((currentValue) => currentValue === 0 ? currentValue : currentValue - 1);
  }

  reset() {
    this.counter = this.defaultCounter;
    this.counterSignal.set(this.defaultCounter);
  }

}
