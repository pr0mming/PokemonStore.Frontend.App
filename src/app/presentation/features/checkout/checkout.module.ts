import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckoutRoutingModule } from './checkout-routing.module';
import { CheckoutPageComponent } from './pages/checkout-page/checkout-page.component';
import { CheckoutProductCardComponent } from './components/checkout-product-card/checkout-product-card.component';
import { CheckoutProductsListComponent } from './components/checkout-products-list/checkout-products-list.component';

// Material
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@NgModule({
  declarations: [
    CheckoutPageComponent,
    CheckoutProductCardComponent,
    CheckoutProductsListComponent
  ],
  imports: [
    CommonModule,
    CheckoutRoutingModule,

    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatBadgeModule,
    MatDividerModule,
    MatProgressSpinnerModule
  ]
})
export class CheckoutModule { }
