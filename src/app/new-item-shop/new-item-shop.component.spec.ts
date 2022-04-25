import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewItemShopComponent } from './new-item-shop.component';

describe('NewItemShopComponent', () => {
  let component: NewItemShopComponent;
  let fixture: ComponentFixture<NewItemShopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewItemShopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewItemShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
