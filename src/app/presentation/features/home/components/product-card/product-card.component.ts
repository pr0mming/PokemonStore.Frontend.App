import { Component, Input } from '@angular/core';

import { Store } from '@ngrx/store';
import { ProductItemType } from 'src/app/core/domain/entities/types/product-item.type';
import { addProductToShoppingCartAction } from 'src/app/presentation/store/shopping-cart/shopping-cart.actions';
import { ShoppingCartState } from 'src/app/presentation/store/shopping-cart/shopping-cart.state';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {

  @Input() productItem?: ProductItemType;

  constructor(
    private readonly store: Store<ShoppingCartState>
  ) { }

  onAddProductToShoppingCartClick(): void {

    if (this.productItem) {

      // Update state of the Shopping Cart
      this.store.dispatch(addProductToShoppingCartAction({
        product: this.productItem
      }));

    }

  }

}
