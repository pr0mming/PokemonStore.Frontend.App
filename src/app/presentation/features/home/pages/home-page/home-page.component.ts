import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs';
import { ProductItemType } from 'src/app/core/domain/entities/types/product-item.type';
import { GetProductsListUseCase } from 'src/app/core/usecases/products/get-products-list.usecase';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  productsList: ProductItemType[] = [];
  isLoading: boolean;

  constructor(
    private readonly getProductsListUseCase: GetProductsListUseCase
  ) {

    this.isLoading = false;

  }

  ngOnInit(): void {

    this.isLoading = true;

    // Show list of items
    this.getProductsListUseCase.execute().pipe(
      finalize(() => { this.isLoading = false; })
    ).subscribe(productsList => {
      this.productsList = productsList ?? [];
    });

  }

}
