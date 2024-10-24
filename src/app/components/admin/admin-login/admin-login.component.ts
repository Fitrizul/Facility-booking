import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../services/auth.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
  username: string = '';
  password: string = '';
  loginError: string = '';
  adminLoginImage: string = 'images/admin-login.jpg';

  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    this.authService.login(this.username, this.password, 'admin').subscribe(isLoggedIn => {
      if (isLoggedIn) {
        this.router.navigate(['/adminDashboard']);
      } else {
        this.loginError = 'Invalid username or password';
      }
    });
  }
}
