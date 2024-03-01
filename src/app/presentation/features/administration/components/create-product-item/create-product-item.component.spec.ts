import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { of } from 'rxjs';
import { CreateProductResponseType } from 'src/app/core/entities/types/services/create-product-response.type';
import { ProductsService } from 'src/app/core/services/products.service';

import { CreateProductItemComponent } from './create-product-item.component';

import createSpyObj = jasmine.createSpyObj;
import SpyObj = jasmine.SpyObj;

describe('CreateProductItemComponent', () => {
  let component: CreateProductItemComponent;
  let fixture: ComponentFixture<CreateProductItemComponent>;

  // Mocked Services
  let productServiceMocked: SpyObj<ProductsService>;

  beforeEach(async () => {
    productServiceMocked = createSpyObj('ProductsService', [ 'createProduct' ]);
    productServiceMocked.createProduct.and.returnValue(of({
      id: '01'
    } as CreateProductResponseType));

    await TestBed.configureTestingModule({
      declarations: [
        CreateProductItemComponent
      ],
      imports: [
        BrowserAnimationsModule,
        HttpClientTestingModule,
        MatIconModule,
        MatInputModule,
        ReactiveFormsModule
      ],
      providers: [
        { provide: ProductsService, useValue: productServiceMocked }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(inject([FormBuilder], (fb: FormBuilder) => {
    fixture = TestBed.createComponent(CreateProductItemComponent);
    component = fixture.componentInstance;

    component.createProductForm = component.createForm();

    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('create a right product', () => {
    component.createProductForm.get('name')?.setValue('Pokemon Test');
    component.createProductForm.get('description')?.setValue('Un buen pokemon');
    component.createProductForm.get('price')?.setValue(1000);
    component.productFile = new File([""], "filename", { type: 'image/png' });

    const formElement = fixture.debugElement.query(By.css('#productForm'));
    expect(formElement.triggerEventHandler('submit', fixture.debugElement.nativeElement)).toBeUndefined();
  });
});
