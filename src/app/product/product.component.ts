import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { ActivatedRoute,ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DetailsComponent } from '../details/details.component';

interface items {
  category: String,
  description: String,
  id: Number,
  image: String,
  price: Number,
  title: String,
}

interface card {
  title:String,
  cols:Number,
  rows:Number,
  category: String,
  description: String,
  id: Number,
  image: String,
  price: Number,
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit{

  template : card[]= []
  category : string
  cards


  constructor(private breakpointObserver: BreakpointObserver,
              public http: HttpClient,
              private route: ActivatedRoute,
              private apiService:ApiService,
              private popUp: MatSnackBar,
              private dialog: MatDialog) {
    
  }

  ngOnInit():void {
    this.route.params.subscribe(e=> {
      this.category = e.category
      this.loadCards()
    })
  }

  getImage = url => { return `url(${url})` }

  getproducts(category:string): Observable<items[]>{
    if(category && category != "all") return this.http.get<items[]>(`https://fakestoreapi.com/products/category/${category}`)
    else return this.http.get<items[]>(`https://fakestoreapi.com/products`)
  }

  loadCards(){
    this.template = []
    this.cards = []
    this.cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
      map(({ matches }) => {
        if (matches) {
          this.getproducts(this.category).subscribe(res => 
            {res.forEach(items => {
              this.template.push({ title: items.title,
                                   cols: 2,
                                   rows: 2,
                                   category: items.category,
                                   description: items.description,
                                   id: items.id,
                                   image: items.image,
                                   price: items.price,})
            })}
            )
          return this.template
        }
        this.getproducts(this.category).subscribe(res => 
          {res.forEach(items => {
            this.template.push({ title: items.title,
                                 cols: 1,
                                 rows: 2,
                                 category: items.category,
                                 description: items.description,
                                 id: items.id,
                                 image: items.image,
                                 price: items.price,})
          })}
          )
        return this.template
      })
    )
  }

  addToCart(product: items): void {
    this.apiService.add(product)
    this.apiService.nextPing(1)
    this.popUp.open("Item added to cart","😄",{
      duration: 500,
      horizontalPosition: 'center',
      verticalPosition: 'top'
    })
  }

  viewDetails(product: card): void{
    const dialogConfig = new MatDialogConfig();
      dialogConfig.data = product
      dialogConfig.width = "400px"
      this.dialog.open(DetailsComponent,dialogConfig)
  }
  

}
