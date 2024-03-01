import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductItemType } from 'src/app/core/domain/entities/types/product-item.type';
import { DeleteProductUseCase } from 'src/app/core/usecases/products/delete-product';
import { CreateProductItemComponent } from '../create-product-item/create-product-item.component';
import { EditProductItemComponent } from '../edit-product-item/edit-product-item.component';

@Component({
  selector: 'app-products-management',
  templateUrl: './products-management.component.html',
  styleUrls: ['./products-management.component.scss']
})
export class ProductsManagementComponent {

  displayedColumns: string[] = [];

  @Input() dataSource: ProductItemType[] = [];

  constructor(
    private readonly deleteProductUseCase: DeleteProductUseCase,
    private readonly dialog: MatDialog
  ) {    

    this.displayedColumns = ['id', 'name', 'price', 'creationDate', 'actions']

  }
  
  onOpenCreateProductDialogClick(): void {

    this.dialog.open(CreateProductItemComponent, {
      width: '750px'
    });

  }

  onOpenEditProductDialogClick(product: ProductItemType): void {

    this.dialog.open(EditProductItemComponent, {
      width: '750px',
      data: product
    });

  }

  onDeleteProductClick(product: ProductItemType): void {

    this.deleteProductUseCase.execute(product.id).subscribe();

    window.location.reload();

  }

}
