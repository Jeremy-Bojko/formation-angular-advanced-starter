import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from '../services/orders.service';

@Injectable({
  providedIn: 'root'
})
export class ListOrderResolver implements Resolve<Order[]> {

  constructor(private ordersService: OrdersService){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Order[]> {
    return this.ordersService.loadOrders()
  }
}
