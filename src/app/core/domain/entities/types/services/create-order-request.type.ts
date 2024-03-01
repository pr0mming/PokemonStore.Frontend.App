export type CreateOrderRequestType = {
    items: CreateOrderItemsRequestType[];
}

type CreateOrderItemsRequestType = {
    productId: string;
    ammount: number;
}