import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.scss',
})
export class HomeComponent {
  protected readonly title = signal('basesAngular2026');
}
