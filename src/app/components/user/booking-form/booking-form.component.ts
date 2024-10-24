import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterLinkActive, RouterOutlet, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Facility } from '../../../models/facility.model';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-booking-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.css']
})
export class BookingFormComponent implements OnInit {
  
  bookingForm!: FormGroup;
  @Input() facility?: Facility;
  availableTimes: string[] = [];
  submitted = false;
  bookingSuccess = false;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ) {
    
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.getFacilityDetails(id);
      }
    });

    this.bookingForm = this.fb.group({
      date: ['', Validators.required],
      startTime: ['', Validators.required],
      duration: ['', [Validators.required, Validators.min(0.5)]],
      comments: ['']
    });

  }

  generateAvailableTimes(startTime: string, endTime: string): void {
    const startHour = parseInt(startTime.split(':')[0], 10);
    const endHour = parseInt(endTime.split(':')[0], 10) - 1;

    for (let hour = startHour; hour <= endHour; hour++) {
      const formattedHour = hour < 10 ? `0${hour}:00` : `${hour}:00`;
      this.availableTimes.push(formattedHour);
    }
  }

  getFacilityDetails(id: string) {
    this.http.get<Facility[]>('api/facilities')
      .subscribe({
        next: facilities => {
          this.facility = facilities.find(f => f.id === id);
          if (this.facility) {
            this.generateAvailableTimes(this.facility.startTime, this.facility.endTime);
          }
        },
        error: err => {
          console.error('Error fetching facility details:', err);
        }
      });
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.bookingForm.invalid) {
      return;
    }

    this.bookingSuccess = true;

    setTimeout(() => {
      this.router.navigate(['/userDashboard']);
    }, 3000);
  }

  dismissAlert(): void {
    this.bookingSuccess = false;
  }
}
