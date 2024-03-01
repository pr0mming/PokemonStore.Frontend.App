import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { catchError, finalize, of } from 'rxjs';
import { ProductItemType } from 'src/app/core/domain/entities/types/product-item.type';
import { EditProductRequestType } from 'src/app/core/domain/entities/types/services/edit-product-request.type';
import { EditProductUseCase } from 'src/app/core/usecases/products/edit-product.usecase';

@Component({
  selector: 'app-edit-product-item',
  templateUrl: './edit-product-item.component.html',
  styleUrls: ['./edit-product-item.component.scss']
})
export class EditProductItemComponent {

  editProductForm: FormGroup;
  isLoading: boolean;
  showSuccessMessage: boolean;

  constructor(
    private readonly fbService: FormBuilder,
    private readonly editProductUseCase: EditProductUseCase,
    @Inject(MAT_DIALOG_DATA) public data: ProductItemType
  ) {

    this.isLoading = false;
    this.showSuccessMessage = false;

    this.editProductForm = this.createForm();

  }

  onSubmitEditProductFormClick(): void {

    if (this.editProductForm.valid) {

      this.isLoading = true;

      const { name, description, price } = this.editProductForm.value;

      // There is missing the picture modification feature ...
      const product: EditProductRequestType = {
        name,
        description,
        price
      };

      // Update
      this.editProductUseCase.execute(this.data.id, product).pipe(
        finalize(() => { this.isLoading = false; }),
        catchError(() => of(null))
      ).subscribe(response => {
        this.showSuccessMessage = response !== null;
      });

    }

  }

  createForm(): FormGroup {

    return this.fbService.group({
      name: [this.data.name, [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(20)
      ]],
      description: [this.data.description, [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(820)
      ]],
      price: [this.data.price, [
        Validators.required,
        Validators.min(1),
        Validators.max(9999)
      ]]
    });

  }

  public getFormControlByName(name: string) {
    return this.editProductForm.get(name);
  }

}
