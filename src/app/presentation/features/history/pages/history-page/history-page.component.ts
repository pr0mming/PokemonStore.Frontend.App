import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs';
import { OrderItemType } from 'src/app/core/domain/entities/types/order-item.type';
import { GetOrdersListUseCase } from 'src/app/core/usecases/orders/get-orders-list.usecase';

@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.scss']
})
export class HistoryPageComponent implements OnInit {

  ordersList: OrderItemType[] = [];
  isLoading: boolean;

  constructor(
    private readonly getOrdersListUseCase: GetOrdersListUseCase
  ) {

    this.isLoading = false;

  }  

  ngOnInit(): void {
    
    this.getOrdersListUseCase.execute().pipe(
      finalize(() => { this.isLoading = false; })
    ).subscribe(response => {

      if (response) {
        this.ordersList = [...this.ordersList].concat(...response.map(item => item.orderItems));
      }
      
    });

  }

}
