import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogPermission2Component } from './dialog-permission2.component';

describe('DialogPermission2Component', () => {
  let component: DialogPermission2Component;
  let fixture: ComponentFixture<DialogPermission2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogPermission2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogPermission2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
