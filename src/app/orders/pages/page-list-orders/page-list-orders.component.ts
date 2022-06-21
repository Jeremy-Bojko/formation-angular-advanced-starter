import { HttpClient } from '@angular/common/http';
import { AfterContentInit, AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { BehaviorSubject, Observable, pluck, Subject, Subscription, tap } from 'rxjs';
import { StateOrder } from 'src/app/core/enums/state-order';
import { Order } from 'src/app/core/models/order';
import { VersionService } from 'src/app/core/services/version.service';
import { OrdersService } from '../../services/orders.service';
import { deleteOrderByIdAction, editOrderAction, getAllOrdersAction } from '../../store/actions/orders.actions';
import { selectAllOrders } from '../../store/selectors/orders.selectors';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss']
})
export class PageListOrdersComponent implements OnInit {
  public titleParent = 'Liste de commandes';
  // public collection!: Order[];
  public collection$: Observable<Order[]>;
  public headers: string[];

  public titleTest = 'Le titre de mon composant';

  public userList!: any;
  public userListHeaders!: string[];
  public demoDate = new Date();

  public stateOrder = StateOrder;
  public collection!: Order[];
  
  private count = 0;
  // private subNumVersion: Subscription;

  constructor(
    private ordersService: OrdersService,
    private router: Router, 
    private store: Store
  ) { 
    this.headers = ["","", $localize `TjmHt`, $localize `NbJours`, $localize `TVA`, $localize `Total HT`, $localize `Total TTC`, $localize `Type Presta`, $localize `Client`, $localize `State`];
    this.collection$ = this.store.select(selectAllOrders);
    this.store.dispatch(getAllOrdersAction());
  }

  public total(val: number, coef: number, tva?: number): number {
    this.count++;
    console.warn(this.count);
    if(tva) {
      return val * coef * (1 + tva/100);
    } else {
      return val * coef;
    }
  }
  

  ngOnInit(): void {
  }

  public onChangeState(order: Order, event: any): void {
    const orderToUpdate = new Order({...order, state: event.target.value});
    this.store.dispatch(editOrderAction({orderToUpdate}));
  }

  public onClickGoToEdit(order: Order): void {
    // redirection vers une url du type /orders/edit/order.id
    // this.router.navigate(['orders', 'edit', order.id]);
    this.router.navigateByUrl(`/orders/edit/${order.id}`);
  }

  public onClickDelete(order: Order): void {
    this.store.dispatch(deleteOrderByIdAction({id: order.id}))
  }

  ngOnDestroy(): void {
    console.log('Instance detruite + desinscription');
  }
}
