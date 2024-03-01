import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UseCase } from "../../base/usecase.base";
import { CreateOrderRequestType } from "../../domain/entities/types/services/create-order-request.type";
import { IOrdersRepository } from "../../repositories/iorders.repository";

@Injectable({
    providedIn: 'root'
})
export class CreateOrderUseCase implements UseCase<{ id: string } | null> {
    
    constructor(
        private readonly ordersRepository: IOrdersRepository
    ) { }

    execute(order: CreateOrderRequestType): Observable<{ id: string } | null> {
        return this.ordersRepository.createOrder(order);
    }

}