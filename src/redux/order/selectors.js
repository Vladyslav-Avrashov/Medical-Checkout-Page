//
// store/selectors/ordersSelectors.js
import { createSelector } from "@reduxjs/toolkit";

// Базовый селектор для orders state
const selectOrdersState = (state) => state.orders;

// Селекторы для различных частей состояния заказов
export const selectCurrentOrder = createSelector(
  [selectOrdersState],
  (orders) => orders.currentOrder
);

export const selectCreateOrderLoading = createSelector(
  [selectOrdersState],
  (orders) => orders.createOrderLoading
);

export const selectCreateOrderSuccess = createSelector(
  [selectOrdersState],
  (orders) => orders.createOrderSuccess
);

export const selectOrdersError = createSelector(
  [selectOrdersState],
  (orders) => orders.error
);

// Селектор для проверки, был ли успешно создан заказ
export const selectIsOrderCreated = createSelector(
  [selectCreateOrderSuccess, selectCurrentOrder],
  (success, currentOrder) => success && currentOrder !== null
);

// Селектор для информации о последнем созданном заказе
export const selectLastOrderInfo = createSelector(
  [selectCurrentOrder],
  (currentOrder) => {
    if (!currentOrder) return null;

    return {
      id: currentOrder._id,
      customerName: currentOrder.name,
      email: currentOrder.email,
      total: currentOrder.total,
      totalItems: currentOrder.totalItems,
      createdAt: currentOrder.createdAt,
      shippingAddress: {
        address: currentOrder.address,
        city: currentOrder.city,
        postalCode: currentOrder.postalCode,
        country: currentOrder.country,
      },
      paymentMethod: currentOrder.paymentMethod,
      shippingMethod: currentOrder.shippingMethod,
    };
  }
);

// Селектор для проверки состояния загрузки
export const selectIsCreatingOrder = createSelector(
  [selectCreateOrderLoading],
  (loading) => loading
);
//
