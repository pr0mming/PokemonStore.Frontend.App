import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeSidebarComponent } from './layout/home/home-sidebar/home-sidebar.component';
import { HomeFooterComponent } from './layout/home/home-footer/home-footer.component';
import { HomeHeaderComponent } from './layout/home/home-header/home-header.component';
import { ShoppingCartComponent } from './layout/home/shopping-cart/shopping-cart.component';

// Material Modules
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';

import { RouterModule } from '@angular/router';

import { shoppingCartReducer } from '../store/shopping-cart/shopping-cart.reducers';
import { StoreModule } from '@ngrx/store';
import { uiReducer } from '../store/ui/ui.reducers';
import { StoreFeaturesEnum } from 'src/app/core/domain/entities/enums/store-features.enum';

@NgModule({
  declarations: [
    HomeHeaderComponent,
    HomeSidebarComponent,
    HomeFooterComponent,
    ShoppingCartComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    
    MatIconModule,
    MatBadgeModule,
    
    StoreModule.forFeature(StoreFeaturesEnum.ShoppingCart, shoppingCartReducer),
    StoreModule.forFeature(StoreFeaturesEnum.UI, uiReducer)
  ],
  exports: [
    HomeHeaderComponent,
    HomeSidebarComponent,
    HomeFooterComponent,
    ShoppingCartComponent
  ],
})
export class SharedModule { }
