import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CheckoutPage } from './checkout/checkout.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full'
  },
  {
    path: 'welcome',
    loadChildren: () => import('./welcome/welcome.module').then(m => m.WelcomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then(m => m.RegisterPageModule)
  },
  {
    path: 'reset',
    loadChildren: () => import('./reset/reset.module').then(m => m.ResetPageModule)
  },
 
  {
    path: 'customer-tabs',
    loadChildren: () => import('./customer-tabs/customer-tabs.module').then( m => m.CustomerTabsPageModule)
  },
  {
    path: 'admin-tabs',
    loadChildren: () => import('./admin-tabs/admin-tabs.module').then( m => m.AdminTabsPageModule)
  },


  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'reset',
    loadChildren: () => import('./reset/reset.module').then( m => m.ResetPageModule)
  },

 
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
