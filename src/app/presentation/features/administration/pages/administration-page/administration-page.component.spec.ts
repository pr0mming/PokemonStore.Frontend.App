import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { ProductsManagementComponent } from '../../components/products-management/products-management.component';

import { AdministrationPageComponent } from './administration-page.component';

describe('AdministrationPageComponent', () => {
  let component: AdministrationPageComponent;
  let fixture: ComponentFixture<AdministrationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        AdministrationPageComponent,
        ProductsManagementComponent
      ],
      imports: [
        HttpClientTestingModule,
        MatTableModule,
        MatDialogModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdministrationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
