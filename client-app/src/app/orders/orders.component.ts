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
import { ErrorHelper } from '../shared/error-helper';
import { HubConnection } from '@aspnet/signalr-client';
import { Message, OperationType } from '../shared/message.model';
import { Config } from '../shared/config';

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
    this.registerSignalR();
    this.loadRooms();
  }

  private registerSignalR() {
    let connection = new HubConnection(`${Config.baseUrl}message`);
    connection.on('send', data => {
      //console.log(data);
      let message: Message = <Message>data;
      if(message) {
        switch(message.operation) {
          case OperationType.RoomCreated:
          case OperationType.RoomDeleted:
            this.loadRooms();
          break;
          case OperationType.SliceGrabbed:
          case OperationType.SliceCancelled:
          case OperationType.OrdersApproved:
            if(message.context == this.selectedRoomName)
              this.loadOrdersInRoom(this.selectedRoomName);
          break;
        }
      }
    });

    connection.start()
      .then(() => {
         //console.log('MessageHub Connected');
      });

  }

  private loadRooms(): void {
    this.roomService.getRooms()
      .subscribe(rooms => this.onLoadRooms(rooms));
  }

  private onLoadRooms(rooms: Room[]): void {
    this.rooms = rooms;
    if (rooms.length > 0) {
      if (this.selectedRoomName && this.rooms.some(r => r.name == this.selectedRoomName))
        this.selectRoom(this.selectedRoomName);
      else
        this.selectRoom(rooms[0].name);
    }
  }

  public selectRoom(roomName: string): boolean {
    this.rooms.forEach((r) => {
      r.isActive = r.name == roomName;
    });

    this.selectedRoomName = roomName;
    this.order.room = roomName;

    this.loadOrdersInRoom(this.selectedRoomName);

    return false;
  }

  private loadOrdersInRoom(roomName: string) {
    this.ordersService.getOrders(roomName)
      .subscribe(
      orderItems => this.onLoadOrderItems(orderItems),
      error => alert(ErrorHelper.getErrorMessage(error))
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

  private checkIsApproved(): void {
    this.isApproved = this.orderItems.some(item => item.isApproved);
  }

  private setNumberOfSlices(): void {
    let currentUserEmail = this.authenticationService.getLoggedUser();

    this.orderItems.forEach((o) => {
      if (o.who == currentUserEmail) {
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

    if (this.pizzas == 0)
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
        if (result)
          this.loadOrdersInRoom(this.selectedRoomName);
      },
      error => alert(ErrorHelper.getErrorMessage(error))
      );
    return false;
  }

  public cancel(): boolean {
    let orderId: string = this.getOrderId();

    this.ordersService.removeOrder(this.selectedRoomName, orderId)
      .subscribe(result => {
        if (result)
          this.loadOrdersInRoom(this.selectedRoomName);
      },
      error => alert(ErrorHelper.getErrorMessage(error))
      );
    return false;
  }

  private getOrderId(): string {
    let orderId: string;
    this.orderItems.forEach((o) => {
      if (o.who == this.authenticationService.getLoggedUser()) {
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
    this.ordersService.approveOrders(this.selectedRoomName)
      .subscribe(
      result => this.refresh(),
      error => alert(ErrorHelper.getErrorMessage(error))
      );
  }

  // events
  public chartClicked(e: any): void {
    //console.log(e);
  }

  public chartHovered(e: any): void {
    //console.log(e);
  }
}
