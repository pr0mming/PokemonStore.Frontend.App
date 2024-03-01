import { Component, Input } from '@angular/core';
import { catchError, finalize, of } from 'rxjs';
import { CreateOrderRequestType } from 'src/app/core/domain/entities/types/services/create-order-request.type';
import { StoreProductItemType } from 'src/app/core/domain/entities/types/store/store-product-item.type';
import { CreateOrderUseCase } from 'src/app/core/usecases/orders/create-order.usecase';

@Component({
  selector: 'app-checkout-products-list',
  templateUrl: './checkout-products-list.component.html',
  styleUrls: ['./checkout-products-list.component.scss']
})
export class CheckoutProductsListComponent {

  isLoading: boolean;
  showSuccessMessage: boolean;

  @Input() productsList: StoreProductItemType[] = [];
  @Input() total: number;

  constructor(
    private readonly ordersService: CreateOrderUseCase
  ) {

    this.total = 0;
    this.isLoading = false;
    this.showSuccessMessage = false;

  }

  onConfirmCheckoutClick(): void {

    this.isLoading = true;

    const order: CreateOrderRequestType = {
      items: []
    };

    // Prepare DTO
    for (const item of this.productsList) {

      order.items.push({
        productId: item.id,
        ammount: item.ammount
      });

    }

    // Save
    this.ordersService.execute(order).pipe(
      finalize(() => { this.isLoading = false; }),
      catchError(() => of(null))
    ).subscribe(response => {

      this.showSuccessMessage = response !== null;

    });

  }

}
