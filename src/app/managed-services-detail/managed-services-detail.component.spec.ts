import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagedServicesDetailComponent } from './managed-services-detail.component';

describe('ManagedServicesDetailComponent', () => {
  let component: ManagedServicesDetailComponent;
  let fixture: ComponentFixture<ManagedServicesDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagedServicesDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagedServicesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
