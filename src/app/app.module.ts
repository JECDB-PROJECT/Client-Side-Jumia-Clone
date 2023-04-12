import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Componants/header/header.component';
import { FooterComponent } from './Componants/footer/footer.component';
import { SideBarComponent } from './Componants/side-bar/side-bar.component';
import { HomeComponent } from './Componants/home/home.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AuthInterceptorProvider } from './auth.interceptor';
import { UseraccountComponent } from './Componants/useraccount/useraccount.component';
import { HelpCenterComponent } from './Componants/help-center/help-center.component';
import { AccountoverviewComponent } from './accountoverview/accountoverview.component';
import { UserCartComponent } from './Componants/user-cart/user-cart.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SideBarComponent,
    HomeComponent,
    UseraccountComponent,
    HelpCenterComponent,
    AccountoverviewComponent,
    UserCartComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),
  ],
  providers: [AuthInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
