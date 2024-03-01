import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UseCase } from "../../base/usecase.base";
import { ProductItemType } from "../../domain/entities/types/product-item.type";
import { IProductsRepository } from "../../repositories/iproducts.repository";

@Injectable({
    providedIn: 'root'
})
export class GetProductsListUseCase implements UseCase<ProductItemType[] | null> {
    
    constructor(
        private readonly ordersRepository: IProductsRepository
    ) { }

    execute(): Observable<ProductItemType[] | null> {
        return this.ordersRepository.getProductsList();
    }

}