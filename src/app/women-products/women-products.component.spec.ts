import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenProductsComponent } from './women-products.component';

describe('WomenProductsComponent', () => {
  let component: WomenProductsComponent;
  let fixture: ComponentFixture<WomenProductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WomenProductsComponent]
    });
    fixture = TestBed.createComponent(WomenProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
