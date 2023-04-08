import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Componants/header/header.component';
import { FooterComponent } from './Componants/footer/footer.component';
import { SideBarComponent } from './Componants/side-bar/side-bar.component';
import { HomeComponent } from './Componants/home/home.component';
import { UserCartComponent } from './Componants/user-cart/user-cart.component';
import { NotFoundComponent } from './Componants/not-found/not-found.component';
import { MainLayoutComponent } from './Componants/main-layout/main-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SideBarComponent,
    HomeComponent,
    UserCartComponent,
    NotFoundComponent,
    MainLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
