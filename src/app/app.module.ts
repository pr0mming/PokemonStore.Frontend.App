import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './presentation/shared/shared.module';

import { IProductsRepository } from './core/repositories/iproducts.repository';
import { IOrdersRepository } from './core/repositories/iorders.repository';
import { ProductsRepository } from './data/repositories/products.repository';
import { OrdersRepository } from './data/repositories/orders.repository';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,

    SharedModule, // Shared UI components (footer, header, etc.) in the main bundle

    StoreModule.forRoot({}), // NgRx Config
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() })
  ],
  providers: [
    // Dependency Injection
    { provide: IProductsRepository, useClass: ProductsRepository },
    { provide: IOrdersRepository, useClass: OrdersRepository }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
