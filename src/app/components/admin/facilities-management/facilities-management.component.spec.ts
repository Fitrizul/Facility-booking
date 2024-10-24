import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilitiesManagementComponent } from './facilities-management.component';

describe('FacilitiesManagementComponent', () => {
  let component: FacilitiesManagementComponent;
  let fixture: ComponentFixture<FacilitiesManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FacilitiesManagementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacilitiesManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
