import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, Subject, tap } from 'rxjs';
import { StateOrder } from 'src/app/core/enums/state-order';
import { Order } from 'src/app/core/models/order';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  public collection$!: Observable<Order[]>;
  public subCollection$ = new Subject<Order[]>();
  private urlApi = environment.urlApi;

  constructor(private http: HttpClient) {
    this.collection$ = this.http.get<Order[]>(`${this.urlApi}/orders`).pipe(
      map(tabObj => {
        return tabObj.map(obj => {
          return new Order(obj)
        })
      })
    );
   }

  public loadOrders(): Observable<Order[]> {
    return this.collection$.pipe(
      tap((listOrder: Order[]) => this.subCollection$.next(listOrder))
    );
  }
  
  public refreshCollection(): void {
    // On se sert de notre flux de donnée type observable froid
    this.collection$.subscribe((listOrder: Order[]) => {
      // Utiliser un observable chaud (subject) pour nexter nos données recues de notre observable froid
      this.subCollection$.next(listOrder);
    })
  }

  public update(order: Order): Observable<Order> {
    return this.http.put<Order>(`${this.urlApi}/orders/${order.id}`, order)
  }

  public changeState(order: Order, state: StateOrder): Observable<Order> {
    const orderToUpdate = new Order({...order, state});
    return this.update(orderToUpdate);
  }

  public add(order: Order): Observable<Order> {
    return this.http.post<Order>(`${this.urlApi}/orders`, order)
  }

  public getById(orderId: number): Observable<Order> {
    return this.http.get<Order>(`${this.urlApi}/orders/${orderId}`);
  }

  public deleteById(orderId: number): Observable<any> {
    return this.http.delete<any>(`${this.urlApi}/orders/${orderId}`)
  }

}
