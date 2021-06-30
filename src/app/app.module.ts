import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { ProductComponent } from './product/product.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { HttpClientModule } from '@angular/common/http';
import {MatSelectModule} from '@angular/material/select';
import { CartComponent } from './cart/cart.component';
import { MatTableModule } from '@angular/material/table'
import {MatBadgeModule} from '@angular/material/badge';
import { MatDialogModule } from '@angular/material/dialog';
import { CheckoutComponent } from './checkout/checkout.component';
import { AddressFormComponent } from './address-form/address-form.component';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { ReactiveFormsModule } from '@angular/forms'
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { DetailsComponent } from './details/details.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ProductComponent,
    CartComponent,
    CheckoutComponent,
    AddressFormComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSidenavModule,
    LayoutModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    HttpClientModule,
    MatSelectModule,
    MatTableModule,
    MatBadgeModule,
    MatDialogModule,
    MatInputModule,
    MatRadioModule,
    ReactiveFormsModule,
    MatSnackBarModule
  ],
  entryComponents: [CheckoutComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
