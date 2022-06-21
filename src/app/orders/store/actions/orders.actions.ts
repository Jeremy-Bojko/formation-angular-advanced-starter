import { createAction, props } from "@ngrx/store";
import { Order } from "src/app/core/models/order";

export const getAllOrdersAction = createAction(
    '[Orders] get all orders'
)

export const getAllOrdersActionSuccess = createAction(
    '[Orders] get all orders success', props<{orders: Order[]}>()
)

export const getAllOrdersActionFailure = createAction(
    '[Orders] get all orders failure', props<{error: any}>()
)

export const deleteOrderByIdAction = createAction(
    '[Orders] delete order by id', props<{id: number}>()
)

export const deleteOrderByIdActionSuccess = createAction(
    '[Orders] delete order by id success', props<{id: number}>()
)

export const deleteOrderByIdActionFailure = createAction(
    '[Orders] delete order by id failure', props<{error: any}>()
)

export const addOrderAction = createAction(
    '[Orders] add order', props<{order: Order}>()
)

export const addOrderActionSuccess = createAction(
    '[Orders] add order success', props<{order: Order}>()
)

export const addOrderActionFailure = createAction(
    '[Orders] add order failure', props<{error: any}>()
)

export const editOrderAction = createAction(
    '[Orders] edit order', props<{orderToUpdate: Order}>()
)

export const editOrderActionSuccess = createAction(
    '[Orders] edit order success', props<{updatedOrder: Order}>()
)

export const editOrderActionFailure = createAction(
    '[Orders] edit order failure', props<{error: any}>()
)