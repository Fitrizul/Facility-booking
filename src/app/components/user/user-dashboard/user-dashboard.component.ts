import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Facility } from '../../../models/facility.model';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet, Router } from '@angular/router';


@Component({
  selector: 'app-user-dashboard',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './user-dashboard.component.html',
  styleUrl: './user-dashboard.component.css'
})
export class UserDashboardComponent implements OnInit {
  facilities: Facility[] = [];

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.loadFacilities();
  }

  loadFacilities() {
    this.http.get<Facility[]>('api/facilities')
      .subscribe(data => {
        this.facilities = data;
      });
  }

  formatTime(time: string): string {
    let [hours, minutes] = time.split(':');
    let period = 'AM';

    let hourNum = parseInt(hours, 10);
    if (hourNum >= 12) {
      period = 'PM';
      if (hourNum > 12) hourNum -= 12;
    } else if (hourNum === 0) {
      hourNum = 12;
    }

    return `${hourNum}:${minutes} ${period}`;
  }

  onLogout() {
    alert('You have been logged out successfully');
    this.router.navigate(['/']);
  }
}
