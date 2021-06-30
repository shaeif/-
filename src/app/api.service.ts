import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';


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

  private subject = new Subject()

  private number = new BehaviorSubject(0);
  ping = this.number.asObservable();

  constructor() { 
  }

  nextPing(message: number) {
    this.number.next(message)
  }



  add(item){
    this.subject.next(item)
    
  }

  getproduct(){
    return this.subject.asObservable()
  }

}
