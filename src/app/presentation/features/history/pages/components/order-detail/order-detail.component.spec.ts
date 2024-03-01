import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { OrderItemType } from 'src/app/core/entities/types/order-item.type';

import { OrderDetailComponent } from './order-detail.component';

describe('OrderDetailComponent', () => {
  let component: OrderDetailComponent;
  let fixture: ComponentFixture<OrderDetailComponent>;

  beforeEach(async () => {
    const order: OrderItemType = {
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
    };

    await TestBed.configureTestingModule({
      declarations: [ OrderDetailComponent ],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: order },
        { provide: MatDialogRef, useValue: {} }
      ]   
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
