import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMarketingEventComponent } from './new-marketing-event.component';

describe('NewMarketingEventComponent', () => {
  let component: NewMarketingEventComponent;
  let fixture: ComponentFixture<NewMarketingEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewMarketingEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewMarketingEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
