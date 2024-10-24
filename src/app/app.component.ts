import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'
import { RouterLink, RouterLinkActive, RouterOutlet, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'facility-booking';
  
  constructor(public router: Router) {}

 
  isHomePage(): boolean {
    return this.router.url === '/';
  }
}
