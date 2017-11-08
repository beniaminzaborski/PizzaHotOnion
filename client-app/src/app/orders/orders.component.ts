import { Component, OnInit, ViewChild, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { RoomService } from '../rooms/rooms.service';
import { Room } from '../rooms/room.model';
import { Order } from './order.model';
import { AuthenticationService } from '../shared/auth/authentication.service';
import { OrderItem } from './order-item.model';
import { OrdersService } from './orders.service';
import { BaseChartDirective } from 'ng2-charts';
import { OrdersApproval } from './orders-approval.model';

@Component({
  selector: 'app-root',
  providers: [
    RoomService,
    OrdersService,
    AuthenticationService
  ],
  templateUrl: './orders.component.html'
})
export class OrdersComponent implements OnInit {

  public rooms: Room[] = [];
  public order: Order;
  public orderItems: OrderItem[] = [];
  public selectedRoomName: string;
  public slices: number = 0;
  public pizzas: number = 0;
  public slicesToGet: number = 0;
  public isApproved: boolean = false;

  @ViewChild(BaseChartDirective) chart: BaseChartDirective;

  // Pie
  public pieChartLabels: string[] = [];
  public pieChartData: number[] = [];
  public pieChartColours: any[] = [{ backgroundColor: ["#FFA1B5", "#7B68EE", "#87CEFA", "#B22222", "#FFE29A", "#D2B48C", "#90EE90", "#FF69B4", "#EE82EE", "#6A5ACD", "#b8436d", "#9ACD32", "#00d9f9", "#800080", "#FF6347", "#DDA0DD", "#a4c73c", "#a4add3", "#008000", "#DAA520", "#00BFFF", "#2F4F4F", "#FF8C00", "#A9A9A9", "#FFB6C1", "#00FFFF", "#6495ED", "#7FFFD4", "#F0F8FF", "#7FFF00", "#008B8B", "#9932CC", "#E9967A", "#8FBC8F", "#483D8B", "#D3D3D3", "#ADD8E6"] }];
  public pieChartType: string = 'pie';

  constructor(
    public router: Router,
    private roomService: RoomService,
    private ordersService: OrdersService,
    private authenticationService: AuthenticationService) {
    this.order = new Order();
    this.order.who = this.authenticationService.getLoggedUser();
  }

  public ngOnInit(): void {
    this.roomService.getRooms()
      .subscribe(rooms => this.onLoadRooms(rooms));
  }

  private onLoadRooms(rooms: Room[]): void {
    this.rooms = rooms;
    if (rooms.length > 0)
      this.selectRoom(rooms[0]);
  }

  public selectRoom(room: Room): boolean {
    this.rooms.forEach((r) => {
      r.isActive = false;
    });
    room.isActive = true;

    this.selectedRoomName = room.name;
    this.order.room = room.name;

    this.loadOrdersInRoom(this.selectedRoomName);

    return false;
  }

  private loadOrdersInRoom(roomName: string) {
    this.ordersService.getOrders(roomName)
      .subscribe(
        orderItems => this.onLoadOrderItems(orderItems),
        error => alert(error)
      );
  }

  private onLoadOrderItems(orderItems: OrderItem[]): void {
    this.orderItems = orderItems;
    this.slices = 0;
    this.pizzas = 0;
    this.setNumberOfSlices();
    this.checkIsApproved();
    this.preparePizzaChart();
  }

  private checkIsApproved() : void {
    this.isApproved = this.orderItems.some(item => item.isApproved);
  }

  private setNumberOfSlices() : void {
    let currentUserEmail = this.authenticationService.getLoggedUser();

    this.orderItems.forEach((o) => {
      if(o.who == currentUserEmail) {
        this.order.quantity = o.quantity;
      }
    });
  }

  private preparePizzaChart(): void {
    let pieChartLabels: string[] = [];
    let pieChartData: number[] = [];

    this.orderItems.forEach((o) => {
      this.slices += o.quantity;
      pieChartLabels.push(o.who);
      pieChartData.push(o.quantity);
    });

    this.pizzas = Math.ceil(this.slices / 8);

    if(this.pizzas == 0)
      return;

    this.slicesToGet = (this.pizzas * 8) - this.slices;
    if (this.slicesToGet > 0) {
      pieChartLabels.push('FREE');
      pieChartData.push(this.slicesToGet);
    }

    this.pieChartLabels = pieChartLabels;
    this.pieChartData = pieChartData;

    setTimeout(() => {
      if (this.chart && this.chart.chart && this.chart.chart.config) {
        this.chart.chart.config.data.labels = this.pieChartLabels;
        //this.chart.chart.config.data.datasets = this.pieChartData;
        this.chart.chart.config.data.colors = this.pieChartColours;
        this.chart.chart.update();
      }
    });
  }

  public makeOrder(): boolean {
    this.ordersService.makeOrder(this.order)
    .subscribe(result => {
      if(result)
        this.loadOrdersInRoom(this.selectedRoomName);
    },
    error => alert(error));
    return false;
  }

  public cancel() : boolean {
    let orderId: string = this.getOrderId();

    this.ordersService.removeOrder(this.selectedRoomName, orderId)
    .subscribe(result => {
      if(result)
        this.loadOrdersInRoom(this.selectedRoomName);
    },
    error => alert(error));
    return false;
  }

  private getOrderId(): string {
    let orderId: string;
    this.orderItems.forEach((o) => {
      if(o.who == this.authenticationService.getLoggedUser()) {
        orderId = o.id;
      }
    });
    return orderId;
  }
  
  public refresh(): boolean {
    this.loadOrdersInRoom(this.selectedRoomName);
    return false;
  }

  public approveOrders(): void {
    let approval = new OrdersApproval();
    approval.pizzaQuantity = this.pizzas;
    approval.room = this.order.room;
    this.ordersService.approveOrders(approval)
      .subscribe(
        result => this.isApproved = true,
        error => alert(error)
      );
  }

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }
}
