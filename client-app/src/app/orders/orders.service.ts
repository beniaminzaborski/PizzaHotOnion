import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";
import { Config } from "../shared/config";
import { OrderItem } from "./order-item.model";
import { Order } from "./order.model";
import { OrdersApproval } from "./orders-approval.model";

@Injectable()
export class OrdersService {

  constructor(private http: HttpClient) { }

  public getOrders(room: string): Observable<OrderItem[]> {
    return this.http.get<OrderItem[]>(
      `${Config.apiUrl}orders/${room}`);
  }

  public makeOrder(order: Order): Observable<boolean> {
    let body = JSON.stringify(order);

    let room = order.room;

    return this.http.post(
      `${Config.apiUrl}orders/${room}`, body, { observe: 'response' }
    ).map(response => response.status == 201);
  }

  public removeOrder(room: string, id: string):  Observable<boolean> {
    return this.http.delete(
      `${Config.apiUrl}orders/${room}/${id}`, { observe: 'response' }
    ).map(response => response.status == 204);
  }

  public approveOrders(room: string): Observable<boolean> {
    return this.http.post(
      `${Config.apiUrl}orders/${room}/approve`, null, { observe: 'response' }
    ).map(response => response.status == 201);
  }
}