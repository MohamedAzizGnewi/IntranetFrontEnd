import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RhDetailComponent } from './rh-detail.component';

describe('RhDetailComponent', () => {
  let component: RhDetailComponent;
  let fixture: ComponentFixture<RhDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RhDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RhDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
