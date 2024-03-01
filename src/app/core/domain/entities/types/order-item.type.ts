import { ProductItemType } from "./product-item.type";

export type OrderItemType = {
    id: string;
    product: ProductItemType;
    ammount: number;
    purchaseDate: string;
}