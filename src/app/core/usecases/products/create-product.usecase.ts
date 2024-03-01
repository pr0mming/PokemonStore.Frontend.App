import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UseCase } from "../../base/usecase.base";
import { CreateProductRequestType } from "../../domain/entities/types/services/create-product-request.type";
import { CreateProductResponseType } from "../../domain/entities/types/services/create-product-response.type";
import { IProductsRepository } from "../../repositories/iproducts.repository";

@Injectable({
    providedIn: 'root'
})
export class CreateProductUseCase implements UseCase<CreateProductResponseType | null> {
    
    constructor(
        private readonly ordersRepository: IProductsRepository
    ) { }

    execute(product: CreateProductRequestType): Observable<CreateProductResponseType | null> {
        return this.ordersRepository.createProduct(product);
    }

}