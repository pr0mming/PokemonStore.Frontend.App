import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { StoreFeaturesEnum } from 'src/app/core/entities/enums/store-features.enum';
import { shoppingCartReducer } from 'src/app/store/shopping-cart/shopping-cart.reducers';

import { CheckoutProductCardComponent } from './checkout-product-card.component';

describe('CheckoutProductCardComponent', () => {
  let component: CheckoutProductCardComponent;
  let fixture: ComponentFixture<CheckoutProductCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckoutProductCardComponent ],
      imports: [
        StoreModule.forRoot({[StoreFeaturesEnum.ShoppingCart]: shoppingCartReducer})
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckoutProductCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
