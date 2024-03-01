import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { of } from 'rxjs';
import { DeleteProductResponseType } from 'src/app/core/entities/types/services/delete-product-response.type';
import { ProductsService } from 'src/app/core/services/products.service';

import { ProductsManagementComponent } from './products-management.component';

import createSpyObj = jasmine.createSpyObj;
import SpyObj = jasmine.SpyObj;

describe('ProductsManagementComponent', () => {
  let component: ProductsManagementComponent;
  let fixture: ComponentFixture<ProductsManagementComponent>;

  // Mocked Services
  let productServiceMocked: SpyObj<ProductsService>;

  beforeEach(async () => {
    productServiceMocked = createSpyObj('ProductsService', [ 'editProduct' ]);
    productServiceMocked.editProduct.and.returnValue(of({
      id: '01'
    } as DeleteProductResponseType));
    
    await TestBed.configureTestingModule({
      declarations: [ ProductsManagementComponent ],
      imports: [
        MatDialogModule
      ],
      providers: [
        { provide: ProductsService, useValue: productServiceMocked }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
