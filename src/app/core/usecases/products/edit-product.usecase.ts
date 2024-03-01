import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UseCase } from "../../base/usecase.base";
import { EditProductRequestType } from "../../domain/entities/types/services/edit-product-request.type";
import { EditProductResponseType } from "../../domain/entities/types/services/edit-product-response.type";
import { IProductsRepository } from "../../repositories/iproducts.repository";

@Injectable({
    providedIn: 'root'
})
export class EditProductUseCase implements UseCase<EditProductResponseType | null> {
    
    constructor(
        private readonly ordersRepository: IProductsRepository
    ) { }

    execute(id: string, product: EditProductRequestType): Observable<EditProductResponseType | null> {
        return this.ordersRepository.editProduct(id, product);
    }

}