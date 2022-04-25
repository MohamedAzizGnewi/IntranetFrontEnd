import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserUpdate2Component } from './user-update2.component';

describe('UserUpdate2Component', () => {
  let component: UserUpdate2Component;
  let fixture: ComponentFixture<UserUpdate2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserUpdate2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserUpdate2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
