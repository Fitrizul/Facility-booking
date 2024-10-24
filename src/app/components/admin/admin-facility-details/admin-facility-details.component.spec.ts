import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminFacilityDetailsComponent } from './admin-facility-details.component';

describe('AdminFacilityDetailsComponent', () => {
  let component: AdminFacilityDetailsComponent;
  let fixture: ComponentFixture<AdminFacilityDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminFacilityDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminFacilityDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
