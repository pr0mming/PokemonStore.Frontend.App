import { Observable } from "rxjs";
import { ProductItemType } from "../domain/entities/types/product-item.type";
import { CreateProductRequestType } from "../domain/entities/types/services/create-product-request.type";
import { CreateProductResponseType } from "../domain/entities/types/services/create-product-response.type";
import { DeleteProductResponseType } from "../domain/entities/types/services/delete-product-response.type";
import { EditProductRequestType } from "../domain/entities/types/services/edit-product-request.type";
import { EditProductResponseType } from "../domain/entities/types/services/edit-product-response.type";

export abstract class IProductsRepository {

    abstract getProductsList(): Observable<ProductItemType[] | null>;

    abstract createProduct(newProduct: CreateProductRequestType): Observable<CreateProductResponseType | null>;

    abstract editProduct(id: string, product: EditProductRequestType): Observable<EditProductResponseType | null>;

    abstract deleteProduct(productId: string): Observable<DeleteProductResponseType | null>;

}