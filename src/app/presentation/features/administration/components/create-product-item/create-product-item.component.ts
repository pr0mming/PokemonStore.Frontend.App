import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { catchError, finalize, of } from 'rxjs';
import { CreateProductRequestType } from 'src/app/core/domain/entities/types/services/create-product-request.type';
import { CreateProductUseCase } from 'src/app/core/usecases/products/create-product.usecase';

@Component({
  selector: 'app-create-product-item',
  templateUrl: './create-product-item.component.html',
  styleUrls: ['./create-product-item.component.scss']
})
export class CreateProductItemComponent {

  createProductForm: FormGroup;

  productFile: File | null = null;
  isLoading: boolean;
  showSuccessMessage: boolean;

  constructor(
    private readonly fbService: FormBuilder,
    private readonly createProductUseCase: CreateProductUseCase
  ) {

    this.isLoading = false;
    this.showSuccessMessage = false;

    this.createProductForm = this.createForm();

  }

  onSubmitCreateProductFormClick(): void {

    if (this.isValidForm() && this.productFile) {

      this.isLoading = true;

      const { name, description, price } = this.createProductForm.value;

      const newProduct: CreateProductRequestType = {
        name,
        description,
        price,
        imageData: this.getBase64ContentForFile(this.productFile) // Get URL Image
      };

      // Save
      this.createProductUseCase.execute(newProduct).pipe(
        finalize(() => { this.isLoading = false; }),
        catchError(() => of(null))
      ).subscribe(response => {
        this.showSuccessMessage = response !== null;
      })

    }

  }

  createForm(): FormGroup {

    return this.fbService.group({
      name: ['', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(20)
      ]],
      description: ['', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(820)
      ]],
      price: [1, [
        Validators.required,
        Validators.min(1),
        Validators.max(9999),
        Validators.pattern("^[0-9]*$")
      ]]
    });

  }

  // I was lazy, so I decided represent an image as a Temp URL in the browser
  private getBase64ContentForFile(file: File): string {

    const fileReader = new FileReader();
    let fileContent = '';

    fileReader.onload = (e) => {

      if (e.target?.result) {
        fileContent = e.target?.result as string; // Temp URL
      }

    }

    fileReader.readAsDataURL(file);

    return fileContent;

  }

  public isValidForm() {
    return this.createProductForm.valid && this.productFile != null;
  }

  public getFormControlByName(name: string) {
    return this.createProductForm.get(name);
  }

}
