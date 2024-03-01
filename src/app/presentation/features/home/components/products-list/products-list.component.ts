import { Component, Input } from '@angular/core';
import { ProductItemType } from 'src/app/core/domain/entities/types/product-item.type';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent {

  @Input() productsList: ProductItemType[] = [];

}
