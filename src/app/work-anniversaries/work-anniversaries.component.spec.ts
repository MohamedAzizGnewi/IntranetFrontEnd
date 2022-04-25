import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkAnniversariesComponent } from './work-anniversaries.component';

describe('WorkAnniversariesComponent', () => {
  let component: WorkAnniversariesComponent;
  let fixture: ComponentFixture<WorkAnniversariesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkAnniversariesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkAnniversariesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
