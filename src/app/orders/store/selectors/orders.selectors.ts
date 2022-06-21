import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ordersFeatureKey, OrdersState } from "../reducers/orders.reducers";

export const OrdersFeature = createFeatureSelector<OrdersState>(ordersFeatureKey);

export const selectAllOrders = createSelector(
    OrdersFeature,
    (state: OrdersState) => {
        return state.orders
    }
)