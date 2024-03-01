import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UseCase } from "../../base/usecase.base";
import { OrderType } from "../../domain/entities/types/order.type";
import { IOrdersRepository } from "../../repositories/iorders.repository";

@Injectable({
    providedIn: 'root'
})
export class GetOrdersListUseCase implements UseCase<OrderType[] | null> {
    
    constructor(
        private readonly ordersRepository: IOrdersRepository
    ) { }

    execute(): Observable<OrderType[] | null> {
        return this.ordersRepository.getOrdersList();
    }

}