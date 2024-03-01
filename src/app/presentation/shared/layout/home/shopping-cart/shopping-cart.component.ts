import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { selectShoppingCartProductsCount } from 'src/app/presentation/store/shopping-cart/shopping-cart.selectors';
import { ShoppingCartState } from 'src/app/presentation/store/shopping-cart/shopping-cart.state';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  productsCount: number;

  constructor(
    private readonly store: Store<ShoppingCartState>
  ) {

    this.productsCount = 0;

  }

  ngOnInit(): void {
    
    this.store.select(selectShoppingCartProductsCount).subscribe(count => {
        this.productsCount = count;
    });

  }

}
