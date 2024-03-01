import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { of } from 'rxjs';
import { EditProductResponseType } from 'src/app/core/entities/types/services/edit-product-response.type';
import { ProductsService } from 'src/app/core/services/products.service';

import { EditProductItemComponent } from './edit-product-item.component';

import createSpyObj = jasmine.createSpyObj;
import SpyObj = jasmine.SpyObj;

describe('EditProductItemComponent', () => {
  let component: EditProductItemComponent;
  let fixture: ComponentFixture<EditProductItemComponent>;

  // Mocked Services
  let productServiceMocked: SpyObj<ProductsService>;

  beforeEach(async () => {
    productServiceMocked = createSpyObj('ProductsService', [ 'editProduct' ]);
    productServiceMocked.editProduct.and.returnValue(of({
      id: '01'
    } as EditProductResponseType));

    await TestBed.configureTestingModule({
      declarations: [ EditProductItemComponent ],
      imports: [
        BrowserAnimationsModule,
        MatInputModule,
        ReactiveFormsModule,
      ],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} },
        { provide: ProductsService, useValue: productServiceMocked }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditProductItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
