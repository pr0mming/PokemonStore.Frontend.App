import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UseCase } from "../../base/usecase.base";
import { DeleteProductResponseType } from "../../domain/entities/types/services/delete-product-response.type";
import { IProductsRepository } from "../../repositories/iproducts.repository";

@Injectable({
    providedIn: 'root'
})
export class DeleteProductUseCase implements UseCase<DeleteProductResponseType | null> {
    
    constructor(
        private readonly ordersRepository: IProductsRepository
    ) { }

    execute(id: string): Observable<DeleteProductResponseType | null> {
        return this.ordersRepository.deleteProduct(id);
    }

}