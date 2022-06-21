import { createReducer, on } from "@ngrx/store";
import { Order } from "src/app/core/models/order";
import { addOrderActionSuccess, deleteOrderByIdActionSuccess, editOrderActionSuccess, getAllOrdersActionSuccess } from "../actions/orders.actions";

export interface OrdersState {
    orders: Order[],
    error: any,
    selectedOrder: Order | null
}

export const initialOrdersState: OrdersState = {
    orders: [],
    error: null,
    selectedOrder: null
}

export const ordersFeatureKey = "orders";

export const orderReducer = createReducer(
    initialOrdersState,
    on(
        getAllOrdersActionSuccess,
        (state: OrdersState, { orders }: { orders: Order[] } ) => {
            return {
                ...state,
                orders: [...orders]
            }
        }
    ),
    on(
        deleteOrderByIdActionSuccess,
        (state: OrdersState, { id }: { id: number}) => {
            console.log("DELETE STATE ", id);
            const newStateOrder = state.orders.filter( (order: Order) => order.id !== id)
            return {
                ...state,
                orders: [...newStateOrder]
            }
        }
    ),
    on(
        addOrderActionSuccess,
        (state: OrdersState, { order } : { order: Order}) => {
            return {
                ...state,
                orders: [...state.orders, new Order(order)]
            }
        }
    ),
    on(
        editOrderActionSuccess,
        (state: OrdersState, { updatedOrder } : { updatedOrder: Order}) => {

            const newStateOrder = state.orders.map((order: Order) => order.id  === updatedOrder.id ? new Order(updatedOrder) : order);
            console.log(newStateOrder);
            return {
                ...state,
                orders: [...newStateOrder]
            } 
        }
    )
)