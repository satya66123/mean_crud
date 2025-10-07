// app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',  // 👈 matches <app-root> in index.html
  standalone:false,
  templateUrl: './app.component.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  title = 'Book Manager';
}
