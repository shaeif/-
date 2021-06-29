import { Component, NgModule } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';



interface prop {
  value: string;
}


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})



export class NavComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {}

  selectedValue: string;


  Products: prop[] = [
    {value: 'all'},
    {value: 'electronics'},
    {value: 'jewelery'},
    {value: "men's clothing"},
    {value: "women's clothing"}
  ];

}