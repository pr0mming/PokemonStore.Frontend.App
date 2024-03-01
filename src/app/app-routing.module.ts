import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components with Lazy Loading
const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    loadChildren: () => import('src/app/presentation/features/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'checkout',
    loadChildren: () => import('src/app/presentation/features/checkout/checkout.module').then(m => m.CheckoutModule)
  },
  {
    path: 'history',
    loadChildren: () => import('src/app/presentation/features/history/history.module').then(m => m.HistoryModule)
  },
  {
    path: 'administration',
    loadChildren: () => import('src/app/presentation/features/administration/administration.module').then(m => m.AdministrationModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
