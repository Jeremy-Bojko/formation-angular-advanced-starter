import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-edit-order',
  templateUrl: './page-edit-order.component.html',
  styleUrls: ['./page-edit-order.component.scss']
})
export class PageEditOrderComponent implements OnInit {
  // public orderToEdit$!: Observable<Order>; // Version avec pipe async 
  public orderToEdit!: Order; // Version avec subscribe

  constructor(
    private route: ActivatedRoute,
    private ordersService: OrdersService,
    private router: Router
  ) {
    // Version avec pipe async 
    // this.route.paramMap.subscribe((params: ParamMap) => {
    //   const orderId = Number(params.get('id'));
    //   console.log(orderId);
    //   this.orderToEdit$ = this.ordersService.getById(orderId);
    // })

    // Version avec subscribe
    this.route.paramMap.subscribe((params: ParamMap) => {
      const orderId = Number(params.get('id'));
      console.log(orderId);
      this.ordersService.getById(orderId).subscribe((order: Order) => {
        this.orderToEdit = order;
      });
    })
   }

  ngOnInit(): void {
  }

  public onSubmitUpdateOrder(submittedOrder: Order): void {
    console.log(submittedOrder);
    this.ordersService.update(submittedOrder).subscribe(() => {
      this.router.navigate(['orders']);
    })
  }

}
