import { OrderItemType } from "./order-item.type";

export type OrderType = {
    id: string;
    orderItems: OrderItemType[];
    creationDate: string;
}