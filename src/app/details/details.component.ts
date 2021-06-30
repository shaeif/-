import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';


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
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public cards: card) { }

  ngOnInit(): void {
  }

}
