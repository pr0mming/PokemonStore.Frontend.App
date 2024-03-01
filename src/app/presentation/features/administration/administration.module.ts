import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministrationRoutingModule } from './administration-routing.module';
import { AdministrationPageComponent } from './pages/administration-page/administration-page.component';
import { ProductsManagementComponent } from './components/products-management/products-management.component';

// Material
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { EditProductItemComponent } from './components/edit-product-item/edit-product-item.component';
import { CreateProductItemComponent } from './components/create-product-item/create-product-item.component';
import { SafeResourceUrlPipe } from 'src/app/core/adapters/pipes/safe-resource-url.pipe';
import { FileProductItemComponent } from './components/file-product-item/file-product-item.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    AdministrationPageComponent,
    ProductsManagementComponent,
    EditProductItemComponent,
    CreateProductItemComponent,
    FileProductItemComponent,

    SafeResourceUrlPipe    
  ],
  imports: [
    CommonModule,
    AdministrationRoutingModule,
    ReactiveFormsModule,

    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatInputModule,
    MatProgressSpinnerModule
  ]  
})
export class AdministrationModule { }
