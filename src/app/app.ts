import { Component, signal } from '@angular/core';
import { ParcialPage } from './components/parcial-page/parcial-page';

@Component({
  selector: 'app-root',
  imports: [ParcialPage],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('parcialweb2026');
}
