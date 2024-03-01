import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { OrderType } from 'src/app/core/entities/types/order.type';
import { OrdersService } from 'src/app/core/services/orders.service';

import { HistoryPageComponent } from './history-page.component';

import createSpyObj = jasmine.createSpyObj;
import SpyObj = jasmine.SpyObj;

describe('HistoryPageComponent', () => {
  let component: HistoryPageComponent;
  let fixture: ComponentFixture<HistoryPageComponent>;

  // Mocked Services
  let orderServiceMocked: SpyObj<OrdersService>;

  beforeEach(async () => {
    orderServiceMocked = createSpyObj('OrdersService', [ 'getOrdersList' ]);
    orderServiceMocked.getOrdersList.and.returnValue(of([
      {
        id: '01',
        orderItems: [
          {
            id: '01',
            ammount: 1,
            product: {
              id: '001',
              name: 'Pikachu',
              description: 'Test Descripcion',
              creationDate: new Date().toISOString(),
              price: 200,
              imageURL: ''
            },
            purchaseDate: new Date().toISOString()
          }
        ],
        creationDate: new Date().toISOString()
      }
    ] as OrderType[]));

    await TestBed.configureTestingModule({
      declarations: [
        HistoryPageComponent
      ],
      providers: [
        { provide: OrdersService, useValue: orderServiceMocked }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('get the orders list for pass to the children components', () => {
    expect(component.ordersList).toHaveSize(1);
  })
});
