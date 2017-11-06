import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";
import { Config } from "../shared/config";
import { Room } from "./room.model";

@Injectable()
export class RoomService {

  constructor(private http: HttpClient) { }

  public getRooms(): Observable<Room[]> {
    return this.http.get<Room[]>(
      `${Config.apiUrl}rooms`);
  }

  public addRoom(room: Room): Observable<boolean> {
    let body = JSON.stringify(room);

    return this.http.post(
      `${Config.apiUrl}rooms`, body, { observe: 'response' }
    ).map(response => response.status == 201);
  }

  public removeRoom(room: string):  Observable<boolean> {
    return this.http.delete(
      `${Config.apiUrl}rooms/${room}`, { observe: 'response' }
    ).map(response => response.status == 204);
  }
}