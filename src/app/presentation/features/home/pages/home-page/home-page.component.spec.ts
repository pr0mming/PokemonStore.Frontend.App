import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import { StoreModule } from '@ngrx/store';
import { StoreFeaturesEnum } from 'src/app/core/entities/enums/store-features.enum';
import { shoppingCartReducer } from 'src/app/store/shopping-cart/shopping-cart.reducers';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { ProductsListComponent } from '../../components/products-list/products-list.component';

import { HomePageComponent } from './home-page.component';

describe('HomePageComponent', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        HomePageComponent,
        ProductCardComponent,
        ProductsListComponent
      ],
      imports: [
        HttpClientTestingModule,
        MatCardModule,
        StoreModule.forRoot({[StoreFeaturesEnum.ShoppingCart]: shoppingCartReducer})
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
