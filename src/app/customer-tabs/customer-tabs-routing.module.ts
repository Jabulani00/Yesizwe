import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerTabsPage } from './customer-tabs.page';

const routes: Routes = [
  {
    path: 'customer-tabs',
    component: CustomerTabsPage,
    children: [
      {
        path: 'menu',
        loadChildren: () => import('../menu/menu.module').then(m => m.MenuPageModule)
      },
      
      {
        path: 'tickets',
        loadChildren: () => import('../tickets/tickets.module').then(m => m.TicketsPageModule)
      },
      {
        path: 'checkout',
        loadChildren: () => import('../checkout/checkout.module').then(m => m.CheckoutPageModule)
      },
      {
        path: '',
        redirectTo: 'menu',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'customer-tabs/menu',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomerTabsPageRoutingModule {}
