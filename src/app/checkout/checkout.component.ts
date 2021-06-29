import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

interface Product {
  title:String,
  description: String,
  price: number,
  qty:number,
  image:string
}

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  totalCoat:number = 0
  
  constructor(@Inject(MAT_DIALOG_DATA) public cartItem: Product[]) { 
    
    cartItem.forEach(item => {
      this.totalCoat += (item.qty*item.price)
    });
  }

  ngOnInit(): void {
  }

}
