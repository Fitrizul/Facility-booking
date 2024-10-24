import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, RouterLink, RouterLinkActive, RouterOutlet, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Facility } from '../../../models/facility.model';

@Component({
  selector: 'app-facilities-management',
  standalone: true,
  templateUrl: './facilities-management.component.html',
  styleUrl: './facilities-management.component.css',
  imports: [ReactiveFormsModule, CommonModule, RouterLink, RouterLinkActive, RouterOutlet]
})

export class FacilitiesManagementComponent implements OnInit {
  facilityForm: FormGroup;
  submitted = false;
  facilityId: string = '';
  imagePath: string = '';
  editSuccess = false;


  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.facilityForm = this.formBuilder.group({
      name: ['', Validators.required],
      startTime: ['', Validators.required],
      endTime: ['', Validators.required],
      maxCapacity: ['', Validators.required],
      features: ['', Validators.required],
      pricePerHour: ['', Validators.required],
      imagePath: ['']
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.facilityId = params['id'];
      if (this.facilityId) {
        this.loadFacilityData(this.facilityId);
      }
    });
  }

  loadFacilityData(facilityId: string) {
    this.http.get<Facility[]>('api/facilities').subscribe({
      next: (data) => {
        const facility = data.find((f: Facility) => f.id === facilityId);
        if (facility) {
          this.facilityForm.patchValue({
            name: facility.name,
            startTime: facility.startTime,
            endTime: facility.endTime,
            maxCapacity: facility.maxCapacity,
            features: facility.features,
            pricePerHour: facility.pricePerHour,
            imagePath: facility.imagePath
          });
          this.imagePath = facility.imagePath; 
        }
      },
      error: (error) => {
        console.error('Failed to load facility data', error);
      }
    });
  }

  onSubmit(): void {
    this.submitted = true;
  
    if (this.facilityForm.invalid) {
      return;
    }
  
    const facilityName = this.facilityForm.get('name')?.value; 
  
    const updatedFacility: Facility = {
      ...this.facilityForm.value,
      id: this.facilityId,
      imagePath: this.imagePath 
    };
  
    this.http.put<Facility[]>(`api/facilities/${this.facilityId}`, updatedFacility)
      .subscribe({
        next: () => {
          this.editSuccess = true;
          setTimeout(() => {
            this.router.navigate(['/adminDashboard']);
          }, 2000);
        },
        error: (error) => {
          console.error('Error updating facility', error);
        }
      });
  }

  dismissAlert(): void {
    this.editSuccess = false;
  }
  
}


