import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewActualityComponent } from './new-actuality.component';

describe('NewActualityComponent', () => {
  let component: NewActualityComponent;
  let fixture: ComponentFixture<NewActualityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewActualityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewActualityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
