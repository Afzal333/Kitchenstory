import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from '../home/home.component';
import { AboutusComponent } from '../aboutus/aboutus.component';
import { ContactusComponent } from '../contactus/contactus.component';
import { KitchenitemsComponent } from '../kitchenitems/kitchenitems.component';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from '../register/register.component';
import { LoginComponent } from '../login/login.component';

import { CartComponent } from '../cart/cart.component';
import { KichenitemsdupliComponent } from '../kichenitemsdupli/kichenitemsdupli.component';
import { KitchendetailComponent } from '../kitchendetail/kitchendetail.component';
import { AdminComponent } from '../admin/admin.component';
import { ViewitemsComponent } from '../viewitems/viewitems.component';
import { AdditemsComponent } from '../additems/additems.component';
import { ChangepswdComponent } from '../changepswd/changepswd.component';
import { PaymentComponent } from '../payment/payment.component';
import { SuccessComponent } from '../success/success.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent,
    ContactusComponent,
    KitchenitemsComponent,
    RegisterComponent,
    LoginComponent,
    
    CartComponent,
    
    KichenitemsdupliComponent,
    
    KitchendetailComponent,
    
    AdminComponent,
    
    ViewitemsComponent,
    
    AdditemsComponent,
    
    ChangepswdComponent,
    
    PaymentComponent,
    
    SuccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
