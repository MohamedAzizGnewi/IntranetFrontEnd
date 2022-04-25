import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenGroceryListButtonComponent } from './open-grocery-list-button.component';

describe('OpenGroceryListButtonComponent', () => {
  let component: OpenGroceryListButtonComponent;
  let fixture: ComponentFixture<OpenGroceryListButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenGroceryListButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenGroceryListButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
