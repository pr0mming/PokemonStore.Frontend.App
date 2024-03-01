import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-file-product-item',
  templateUrl: './file-product-item.component.html',
  styleUrls: ['./file-product-item.component.scss']
})
export class FileProductItemComponent {

  productFile: File | null = null;
  productFileTempURL: string | null = null;

  @Output() productFileChange = new EventEmitter<File>();

  onFileChange(event: Event): void {

    // Basically when you try to load an image
    // There will be retuned the "File" object as output

    const inputElement = event.target as HTMLInputElement;

    if (inputElement.files) {

      this.productFile = inputElement.files[0];

      const fileReader = new FileReader();

      fileReader.onload = (e) => {

        const result = e.target?.result;

        if (result) {

          const blob = new Blob([result]);
          this.productFileTempURL = URL.createObjectURL(blob);

        }

      };

      fileReader.readAsArrayBuffer(this.productFile);

      this.productFileChange.emit(this.productFile);

    }

  }

  onResetPokemonFile(): void {

    if (this.productFileTempURL) {

      URL.revokeObjectURL(this.productFileTempURL);
      this.productFileTempURL = null;

    }

    this.productFile = null;

  }

}
