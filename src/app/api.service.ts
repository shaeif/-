import { Injectable } from '@angular/core';
import { Observable,Subject } from 'rxjs';


interface items {
  category: String,
  description: String,
  id: Number,
  image: String,
  price: Number,
  title: String,
}


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  subject = new Subject()
  constructor() { 
  }

  add(item){
    this.subject.next(item)
    
  }

  getproduct(){
    return this.subject.asObservable()
  }

}
