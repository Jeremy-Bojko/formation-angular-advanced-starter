import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from '../../services/orders.service';
import { addOrderAction } from '../../store/actions/orders.actions';

@Component({
  selector: 'app-page-add-order',
  templateUrl: './page-add-order.component.html',
  styleUrls: ['./page-add-order.component.scss']
})
export class PageAddOrderComponent implements OnInit {
  public newOrder = new Order();

  constructor(
    private ordersService: OrdersService,
    private router: Router,
    private store: Store,
  ) { }

  ngOnInit(): void {
  }

  public onSubmitted(submittedOrder: Order): void {
    console.log("Reception dans le parent : ", submittedOrder);
    this.store.dispatch(addOrderAction({order: submittedOrder}))
    // this.ordersService.add(submittedOrder).subscribe(() => {
    //   // la redirection vers notre url /orders
    //   // this.router.navigate(['orders']);
    //   this.router.navigateByUrl('/orders');
    // })
  }

}
