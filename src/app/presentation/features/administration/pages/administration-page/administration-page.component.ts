import { Component, OnInit } from '@angular/core';
import { ProductItemType } from 'src/app/core/domain/entities/types/product-item.type';
import { GetProductsListUseCase } from 'src/app/core/usecases/products/get-products-list.usecase';

@Component({
  selector: 'app-administration-page',
  templateUrl: './administration-page.component.html',
  styleUrls: ['./administration-page.component.scss']
})
export class AdministrationPageComponent implements OnInit {

  productsList: ProductItemType[] = [];

  constructor(
    private readonly getProductsListUseCase: GetProductsListUseCase
  ) { }

  ngOnInit(): void {

    // Show list of products created when the view is loaded
    this.getProductsListUseCase.execute().subscribe(productsList => {
      this.productsList = productsList ?? [];
    });

  }

}
