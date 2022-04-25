import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagedServicesComponent } from './managed-services.component';

describe('ManagedServicesComponent', () => {
  let component: ManagedServicesComponent;
  let fixture: ComponentFixture<ManagedServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagedServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagedServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
