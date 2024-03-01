import { Component, Input } from '@angular/core';

import { Store } from '@ngrx/store';
import { StoreProductItemType } from 'src/app/core/domain/entities/types/store/store-product-item.type';
import { deleteProductToShoppingCartAction } from 'src/app/presentation/store/shopping-cart/shopping-cart.actions';
import { ShoppingCartState } from 'src/app/presentation/store/shopping-cart/shopping-cart.state';

@Component({
  selector: 'app-checkout-product-card',
  templateUrl: './checkout-product-card.component.html',
  styleUrls: ['./checkout-product-card.component.scss']
})
export class CheckoutProductCardComponent {

  @Input() productItem?: StoreProductItemType;

  constructor(
    private readonly store: Store<ShoppingCartState>
  ) { }
  
  onDeleteShoppingCartProductClick(): void {
 
    if (this.productItem) {

      this.store.dispatch(deleteProductToShoppingCartAction({
        productId: this.productItem?.id
      }));

    }    

  }

}
