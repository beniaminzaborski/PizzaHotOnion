import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './orders.component.html'
})
export class OrdersComponent {

  // Pie
   public pieChartLabels:string[] = ['B.Z.', 'P.P', 'P.W.', ''];
   public pieChartData:number[] = [1, 2, 2, 3];
   public pieChartType:string = 'pie';
   
  constructor(
    public router: Router/*,
    private authenticationService: AuthenticationService*/) {
  }

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
}
