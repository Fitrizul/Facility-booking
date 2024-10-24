import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { UserLoginComponent } from './components/user/user-login/user-login.component';
import { AdminLoginComponent } from './components/admin/admin-login/admin-login.component';
import { FacilitiesManagementComponent } from './components/admin/facilities-management/facilities-management.component';
import { UserDashboardComponent } from './components/user/user-dashboard/user-dashboard.component';
import { AdminDashboardComponent } from './components/admin/admin-dashboard/admin-dashboard.component';
import { UserFacilityDetailsComponent } from './components/user/user-facility-details/user-facility-details.component';
import { AdminFacilityDetailsComponent } from './components/admin/admin-facility-details/admin-facility-details.component';
import { BookingFormComponent } from './components/user/booking-form/booking-form.component';

export const routes: Routes = [
    {
        path: 'userLogin', component: UserLoginComponent
    },
    {
        path: 'userDashboard', component: UserDashboardComponent
    },
    {
        path: 'adminLogin', component: AdminLoginComponent
    },
    {
        path: 'adminDashboard', component: AdminDashboardComponent
    },
    {
        path: 'userFacilitiesDetails/:id', component: UserFacilityDetailsComponent
    },
    {
        path: 'adminFacilitiesDetails/:id', component: AdminFacilityDetailsComponent
    },
    {
        path: 'facilitiesManagement/:id', component: FacilitiesManagementComponent
    },
    {
        path: 'bookingForm/:id', component: BookingFormComponent
    }
    
];
