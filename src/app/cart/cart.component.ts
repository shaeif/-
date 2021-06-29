import { Component, OnInit, ViewChild} from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ApiService } from '../api.service';
import { ScrollToBottomDirective } from '../extra/scroll-to-bottom.directive'
import { CheckoutComponent } from '../checkout/checkout.component'
import { MatSnackBar } from '@angular/material/snack-bar';


interface Product {
  title:String,
  description: String,
  price: number,
  qty:number,
  image:string
}



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})



export class CartComponent implements OnInit{
  @ViewChild(ScrollToBottomDirective)
  scroll: ScrollToBottomDirective;
  
  productData: Product[] = [];

  totalCost: number = 0

  displayedColumns: string[] = ['title', 'qty', 'price'];


  constructor(public apiService: ApiService, private dialog: MatDialog, private popUp: MatSnackBar){}

  ngOnInit(){
    this.apiService.getproduct().subscribe((e: Product) => {
      
      let itemExists : boolean= false

      for(let i in this.productData){
        if(this.productData[i].title === e.title){
          this.productData[i].qty++
          this.totalCost += e.price
          itemExists = true
          break
        }
      }

      if(!itemExists){
        this.addproductToCart(e)
      }

      this.productData = [...this.productData];         


      })



  }


  addproductToCart(e : Product): void{
    this.productData.push({
      title:e.title,
      description:e.description,
      price:e.price,
      qty:1,
      image:e.image
    })

    this.totalCost += e.price
  }

    checkout(e){
      if(e.length === 0){
        this.popUp.open("The Cart is empty","OK",{
          duration: 5000,
          horizontalPosition: 'center',
          verticalPosition: 'top'
        })
      }else
      {
        console.log(e);
        
        const dialogConfig = new MatDialogConfig();
      dialogConfig.data = this.productData
      dialogConfig.width = "60%"
      dialogConfig.height= "60%"
      this.dialog.open(CheckoutComponent,dialogConfig)}
      
    }
}


