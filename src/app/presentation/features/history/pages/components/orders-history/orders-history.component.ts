import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { OrderItemType } from 'src/app/core/domain/entities/types/order-item.type';
import { OrderDetailComponent } from '../order-detail/order-detail.component';

@Component({
  selector: 'app-orders-history',
  templateUrl: './orders-history.component.html',
  styleUrls: ['./orders-history.component.scss']
})
export class OrdersHistoryComponent {
  
  displayedColumns: string[] = [];

  @Input() dataSource: OrderItemType[] = [];

  constructor(
    private readonly dialog: MatDialog
  ) {    

    this.displayedColumns = ['id', 'name', 'ammount', 'price', 'actions']

  }

  onOpenOrderDetailDialogClick(order: OrderItemType): void {

    this.dialog.open(OrderDetailComponent, {
      width: '750px',
      data: order
    });

  }

}
