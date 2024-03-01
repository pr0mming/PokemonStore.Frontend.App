import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, of } from "rxjs";
import { OrderType } from "src/app/core/domain/entities/types/order.type";
import { CreateOrderRequestType } from "src/app/core/domain/entities/types/services/create-order-request.type";
import { IOrdersRepository } from "src/app/core/repositories/iorders.repository";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class OrdersRepository extends IOrdersRepository {

    constructor(
        private readonly httpClient: HttpClient
    ) {
        super();
    }

    getOrdersList(): Observable<OrderType[] | null> {   
        return this.httpClient.get<OrderType[]>(
            `${ environment.pokemonCoreBaseURL }/api/order`
        ).pipe(catchError(() => of(null)));
    }

    createOrder(order: CreateOrderRequestType): Observable<{ id: string } | null> {
        return this.httpClient.post<{ id: string }>(
            `${ environment.pokemonCoreBaseURL }/api/order`, 
            { order }
        ).pipe(catchError(() => of(null)));
    }

}