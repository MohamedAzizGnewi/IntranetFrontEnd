import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateOnlineComponent } from './update-online.component';

describe('UpdateOnlineComponent', () => {
  let component: UpdateOnlineComponent;
  let fixture: ComponentFixture<UpdateOnlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateOnlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateOnlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
