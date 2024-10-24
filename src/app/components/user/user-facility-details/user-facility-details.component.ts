import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Facility } from '../../../models/facility.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-facility-details',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './user-facility-details.component.html',
  styleUrl: './user-facility-details.component.css'
})
export class UserFacilityDetailsComponent implements OnInit {
  facility?: Facility;
  loading = true; 

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.getFacilityDetails(id);
      }
    });
  }

  getFacilityDetails(id: string) {
    this.http.get<Facility[]>('api/facilities')
      .subscribe({
        next: facilities => {
          this.facility = facilities.find(f => f.id === id);
          this.loading = false;  
          if (!this.facility) {
            console.warn(`Facility with id ${id} not found`);
          }
        },
        error: err => {
          console.error('Error fetching facilities:', err);
          this.loading = false;  
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

