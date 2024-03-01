import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { OrdersService } from 'src/app/core/services/orders.service';

import { CheckoutProductsListComponent } from './checkout-products-list.component';

import createSpyObj = jasmine.createSpyObj;
import SpyObj = jasmine.SpyObj;

describe('CheckoutProductsListComponent', () => {
  let component: CheckoutProductsListComponent;
  let fixture: ComponentFixture<CheckoutProductsListComponent>;

  // Mocked Services
  let orderServiceMocked: SpyObj<OrdersService>;

  beforeEach(async () => {
    orderServiceMocked = createSpyObj('ProductsService', [ 'createOrder' ]);
    orderServiceMocked.createOrder.and.returnValue(of({
      id: '01'
    }));

    await TestBed.configureTestingModule({
      declarations: [ CheckoutProductsListComponent ],
      providers: [
        { provide: OrdersService, useValue: orderServiceMocked }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckoutProductsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
