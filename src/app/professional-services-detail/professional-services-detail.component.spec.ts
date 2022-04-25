import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalServicesDetailComponent } from './professional-services-detail.component';

describe('ProfessionalServicesDetailComponent', () => {
  let component: ProfessionalServicesDetailComponent;
  let fixture: ComponentFixture<ProfessionalServicesDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfessionalServicesDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessionalServicesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
