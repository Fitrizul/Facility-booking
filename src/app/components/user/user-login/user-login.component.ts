import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../services/auth.service';
import { Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-user-login',
  standalone: true,
  imports: [RouterLink, FormsModule, CommonModule],
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
  username: string = '';
  password: string = '';
  loginError: string = '';
  userLoginImage: string = 'images/user-login.jpg';

  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    this.authService.login(this.username, this.password, 'user').subscribe(isLoggedIn => {
      if (isLoggedIn) {
        this.router.navigate(['/userDashboard']);
      } else {
        this.loginError = 'Invalid username or password';
      }
    });
  }
}
