import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Componants/home/home.component';
import { NotFoundComponent } from './Componants/not-found/not-found.component';
import { UserCartComponent } from './Componants/user-cart/user-cart.component';

const routes: Routes = [
  {path:'cart',component:UserCartComponent,title:'cart'},
  {path:'',component:HomeComponent,children:[
    {path:'',redirectTo:'/Home',pathMatch:'full'},//Default path
    {path:'Home',component:HomeComponent,title:'Home'},
    // {path:'cart',component:UserCartComponent,title:'cart'},
  ]},
  {path:'**',component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
