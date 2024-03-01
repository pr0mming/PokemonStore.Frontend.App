import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, of } from "rxjs";
import { ProductItemType } from "src/app/core/domain/entities/types/product-item.type";
import { CreateProductRequestType } from "src/app/core/domain/entities/types/services/create-product-request.type";
import { CreateProductResponseType } from "src/app/core/domain/entities/types/services/create-product-response.type";
import { DeleteProductResponseType } from "src/app/core/domain/entities/types/services/delete-product-response.type";
import { EditProductRequestType } from "src/app/core/domain/entities/types/services/edit-product-request.type";
import { EditProductResponseType } from "src/app/core/domain/entities/types/services/edit-product-response.type";
import { IProductsRepository } from "src/app/core/repositories/iproducts.repository";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class ProductsRepository extends IProductsRepository {

    constructor(
        private readonly httpClient: HttpClient
    ) {
        super();
    }

    getProductsList(): Observable<ProductItemType[] | null> {   
        return this.httpClient.get<ProductItemType[]>(
            `${environment.pokemonCoreBaseURL}/api/product`
        ).pipe(catchError(() => of(null)));
    }

    createProduct(newProduct: CreateProductRequestType): Observable<CreateProductResponseType | null> {
        return this.httpClient.post<CreateProductResponseType>(
            `${environment.pokemonCoreBaseURL}/api/product`,
            newProduct
        ).pipe(catchError(() => of(null)));
    }

    editProduct(id: string, product: EditProductRequestType): Observable<EditProductResponseType | null> {
        return this.httpClient.patch<EditProductResponseType>(
            `${environment.pokemonCoreBaseURL}/api/product/${id}`,
            product
        ).pipe(catchError(() => of(null)));
    }

    deleteProduct(productId: string): Observable<DeleteProductResponseType | null> {
        return this.httpClient.delete<DeleteProductResponseType>(
            `${environment.pokemonCoreBaseURL}/api/product/${productId}`
        ).pipe(catchError(() => of(null)));
    }

}