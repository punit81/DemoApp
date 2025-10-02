import { Component, signal } from '@angular/core';
import { HeaderComponent } from "./header.component/header.component";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: true
})
export class App {
  protected readonly title = signal('DemoApp');
}
