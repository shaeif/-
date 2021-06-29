import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {path:"/ecom",redirectTo:"/products", pathMatch:"full" },
  {path:"/ecom/products", component:ProductComponent},
  {path:"/ecom/products/:category", component:ProductComponent},
  {path:"/ecom/cart", component: CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
