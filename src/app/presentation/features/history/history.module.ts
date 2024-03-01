import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistoryRoutingModule } from './history-routing.module';
import { HistoryPageComponent } from './pages/history-page/history-page.component';
import { OrdersHistoryComponent } from './pages/components/orders-history/orders-history.component';
import { OrderDetailComponent } from './pages/components/order-detail/order-detail.component';

// Material
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    HistoryPageComponent,
    OrdersHistoryComponent,
    OrderDetailComponent
  ],
  imports: [
    CommonModule,
    HistoryRoutingModule,

    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatProgressSpinnerModule
  ]
})
export class HistoryModule { }
