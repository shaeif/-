import { Component,OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { ApiService } from '../api.service';



interface prop {
  value: string;
}


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})



export class NavComponent implements OnInit{

  itemCount: number = 0

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver,
              private apiService: ApiService) {}

  selectedValue: string;

  ngOnInit() {
    this.apiService.ping.subscribe(message => this.itemCount += message)
  }

  Products: prop[] = [
    {value: 'all'},
    {value: 'electronics'},
    {value: 'jewelery'},
    {value: "men's clothing"},
    {value: "women's clothing"}
  ];

}