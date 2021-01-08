import { GPageNotFoundComponent } from './g-page-not-found/g-page-not-found.component';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent} from './layout/admin/adminLayout.component';
import { ADMIN_ROUTES } from './admin/admin.routes';
import { AppComponent } from './app.component';
import { FrontLayoutComponent } from './layout/front/frontLayout.component';
import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';

export const AppRoutes: Routes = [
  { path: '', component:FrontLayoutComponent, children:[
    {  path: 'home',component:HomeComponent, loadChildren: './home/home.module#HomeModule'},
    { path: 'account', loadChildren: './account/account.module#AccountModule' },
    { path: 'cart', loadChildren: './cart/cart.module#CartModule' },
    { path: 'checkout', loadChildren: './checkout/checkout.module#CheckoutModule' },
    { path: 'faq', loadChildren: './faq/faq.module#FaqModule' }]
  },
  { path:'sysadmin', component:AdminLayoutComponent, data:{title:'Admin view'}, children:ADMIN_ROUTES},
  {path: 'not-found', component: GPageNotFoundComponent, data: { message: 'Page not found!' }} ,
  { path: '**', redirectTo: '/not-found' },
];

