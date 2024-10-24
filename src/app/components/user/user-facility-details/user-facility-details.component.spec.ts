import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFacilityDetailsComponent } from './user-facility-details.component';

describe('UserFacilityDetailsComponent', () => {
  let component: UserFacilityDetailsComponent;
  let fixture: ComponentFixture<UserFacilityDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserFacilityDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserFacilityDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
