import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Componants/home/home.component';
import { NotFoundComponent } from './Componants/not-found/not-found.component';
import { UserCartComponent } from './Componants/user-cart/user-cart.component';
import { HelpCenterComponent } from './Componants/help-center/help-center.component';
import { UseraccountComponent } from './Componants/useraccount/useraccount.component';
import { AccountoverviewComponent } from './accountoverview/accountoverview.component';
import { CategProductsComponent } from './Componants/categ-products/categ-products.component';
import { SubCategProductsComponent } from './Componants/sub-categ-products/sub-categ-products.component';

const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: 'Home', component: HomeComponent },
  { path: 'cart', component: UserCartComponent },
  { path: 'help', component: HelpCenterComponent },
  {
    path: 'useraccount', component: UseraccountComponent, children: [
      { path: 'accountoverview', component: AccountoverviewComponent },
    ]
  },
  {
    path: 'User',
    loadChildren: () => import('./Componants/user/user.module').then(m => m.UserModule)
  },
  { path: 'category/:id', component: CategProductsComponent },
  { path: 'subcategory/:id', component: SubCategProductsComponent }
];

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
