import { createReducer, on } from '@ngrx/store';
import { addProductToShoppingCartAction, deleteProductToShoppingCartAction } from './shopping-cart.actions';
import { shoppingCartInitialState } from './shopping-cart.state';

export const shoppingCartReducer = createReducer(
  shoppingCartInitialState,
  on(addProductToShoppingCartAction, (state, { product }) => {

    const result = state.products.find(p => p.id === product.id);

    if (result) {

      return {
        ...state,
        products: state.products.map(item => {

          // If we already have the same product, we update the ammount + 1
          if (item.id === result.id) {
            return { ...item, ammount: item.ammount + 1 };
          }

          return item;

        })
      };

    }

    // If we add the product for the first time, so the ammount is 1

    return {
      ...state,
      products: [
        ...state.products,
        {
          ...product,
          ammount: 1,
          creationDate: new Date().toISOString()
        }
      ]
    };

  }),

  on(deleteProductToShoppingCartAction, (state, { productId }) => {

    return {
      ...state,
      products: state.products.filter(item => item.id != productId)
    };

  })
);
