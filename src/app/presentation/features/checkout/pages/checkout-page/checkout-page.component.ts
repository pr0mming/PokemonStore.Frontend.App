import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { StoreProductItemType } from 'src/app/core/domain/entities/types/store/store-product-item.type';
import { selectShoppingCartProducts, selectShoppingCartTotal } from 'src/app/presentation/store/shopping-cart/shopping-cart.selectors';
import { ShoppingCartState } from 'src/app/presentation/store/shopping-cart/shopping-cart.state';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.scss']
})
export class CheckoutPageComponent implements OnInit {

  productsList: StoreProductItemType[] = [];
  total: number;

  constructor(
    private readonly store: Store<ShoppingCartState>
  ) {

    this.total = 0;

  }

  ngOnInit(): void {

    this.store.select(selectShoppingCartTotal).subscribe(total => {
      this.total = total;
    });
    
    this.store.select(selectShoppingCartProducts).subscribe(items => {
        this.productsList = items;
    });

  }

}
