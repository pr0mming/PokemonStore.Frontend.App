import { StoreProductItemType } from "src/app/core/domain/entities/types/store/store-product-item.type";

export interface ShoppingCartState {
    products: StoreProductItemType[]; // Items in the Shopping Cart
}

export const shoppingCartInitialState: ShoppingCartState = {
    products: []
};
