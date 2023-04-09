import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Componants/home/home.component';
import { NotFoundComponent } from './Componants/not-found/not-found.component';
import { UserCartComponent } from './Componants/user-cart/user-cart.component';

const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: 'Home', component: HomeComponent },
  {
    path: 'User',
    loadChildren: () => import('./Componants/user/user.module').then(m => m.UserModule)
  },
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
