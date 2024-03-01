import { createFeatureSelector, createSelector } from "@ngrx/store";
import { StoreFeaturesEnum } from "src/app/core/domain/entities/enums/store-features.enum";
import { ShoppingCartState } from "./shopping-cart.state";

export const selectProductsStateFeature = createFeatureSelector<ShoppingCartState>(StoreFeaturesEnum.ShoppingCart);
 
export const selectShoppingCartProducts = createSelector(
    selectProductsStateFeature,
    (state) => state.products
);

export const selectShoppingCartProductsCount = createSelector(
    selectProductsStateFeature,
    (state) => state.products.length
);

export const selectShoppingCartTotal = createSelector(
    selectProductsStateFeature,
    (state) => state.products.reduce(
        (prev, curr) => prev + (curr.ammount * curr.price), 
        0
    )
)
