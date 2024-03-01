import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { OrderItemType } from 'src/app/core/domain/entities/types/order-item.type';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss']
})
export class OrderDetailComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: OrderItemType
  ) { }

}
