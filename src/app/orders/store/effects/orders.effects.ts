import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { catchError, map, of, switchMap } from "rxjs";
import { StateOrder } from "src/app/core/enums/state-order";
import { Order } from "src/app/core/models/order";
import { OrdersService } from "../../services/orders.service";
import { addOrderAction, addOrderActionFailure, addOrderActionSuccess, deleteOrderByIdAction, deleteOrderByIdActionFailure, deleteOrderByIdActionSuccess, editOrderAction, editOrderActionFailure, editOrderActionSuccess, getAllOrdersAction, getAllOrdersActionFailure, getAllOrdersActionSuccess } from "../actions/orders.actions";

@Injectable()
export class OrdersEffects {
    constructor(
        private store: Store,
        private ordersService: OrdersService,
        private actions$: Actions
    ){}

    getAllOrdersEffect$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(getAllOrdersAction),
            switchMap(() => {
                return this.ordersService.loadOrders().pipe(
                    map((orders: Order[]) => getAllOrdersActionSuccess({orders: orders})),
                    catchError((error) => of(getAllOrdersActionFailure({error})))
                )
            })
        )
    })

    deleteOrderByIdEffect$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(deleteOrderByIdAction),
            switchMap(({id}) => {
                return this.ordersService.deleteById(id).pipe(
                    map(() => deleteOrderByIdActionSuccess({id: id})),
                    catchError((error) => of(deleteOrderByIdActionFailure({error})))
                )
            })
        )
    })

    addOrderEffect$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(addOrderAction),
            switchMap(({order} : {order: Order}) => {
                return this.ordersService.add(order).pipe(
                    map((order: Order) => addOrderActionSuccess({order: order})),
                    catchError((error) => of(addOrderActionFailure({error})))
                )
            })
        )
    })

    editOrderEffect$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(editOrderAction),
            switchMap(({orderToUpdate} : {orderToUpdate: Order}) => {
                return this.ordersService.update(orderToUpdate).pipe(
                    map((updatedOrder: Order) => editOrderActionSuccess({updatedOrder: updatedOrder})),
                    catchError((error) => of(editOrderActionFailure({error})))
                )
            })
        )
    })
}

