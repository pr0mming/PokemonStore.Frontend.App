import { createAction, props } from '@ngrx/store';
import { ProductItemType } from 'src/app/core/domain/entities/types/product-item.type';

export const addProductToShoppingCartAction = createAction(
    '[Shopping Cart] Add Product To Shopping Cart Action',
    props<{ product: ProductItemType }>()
);

export const deleteProductToShoppingCartAction = createAction(
    '[Shopping Cart] Delete Product To Shopping Cart Action',
    props<{ productId: string }>()
);
