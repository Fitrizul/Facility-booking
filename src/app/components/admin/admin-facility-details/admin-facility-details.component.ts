import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Facility } from '../../../models/facility.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-facility-details',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './admin-facility-details.component.html',
  styleUrl: './admin-facility-details.component.css'
})
export class AdminFacilityDetailsComponent implements OnInit{
  facility?: Facility;
  loading = true;  // Add loading state

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.getFacilityDetails(id);  // Pass id as a string
      }
    });
  }

  getFacilityDetails(id: string) {
    this.http.get<Facility[]>('api/facilities')
      .subscribe({
        next: facilities => {
          this.facility = facilities.find(f => f.id === id);
          this.loading = false;  // Set loading to false when data is loaded
          if (!this.facility) {
            console.warn(`Facility with id ${id} not found`);
          }
        },
        error: err => {
          console.error('Error fetching facilities:', err);
          this.loading = false;  // Handle error and set loading to false
        }
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
}
