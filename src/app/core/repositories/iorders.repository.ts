import { Observable } from "rxjs";
import { OrderType } from "../domain/entities/types/order.type";
import { CreateOrderRequestType } from "../domain/entities/types/services/create-order-request.type";

export abstract class IOrdersRepository {

    abstract getOrdersList(): Observable<OrderType[] | null>;

    abstract createOrder(order: CreateOrderRequestType): Observable<{ id: string } | null>;

}