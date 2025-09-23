import { createSelector } from "@reduxjs/toolkit";

const selectCartState = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCartState],
  (cart) => cart.items
);

export const selectCartTotalItems = createSelector(
  [selectCartState],
  (cart) => cart.totalItems
);

export const selectCartSubTotal = createSelector(
  [selectCartState],
  (cart) => cart.subTotal
);

export const selectCartLoading = createSelector(
  [selectCartState],
  (cart) => cart.loading
);

export const selectCartError = createSelector(
  [selectCartState],
  (cart) => cart.error
);

export const selectCartTotalWithShipping = createSelector(
  [selectCartSubTotal],
  (subTotal) => subTotal + 40
);

export const selectIsCartEmpty = createSelector(
  [selectCartItems],
  (items) => items.length === 0
);

export const selectCartSummary = createSelector(
  [
    selectCartItems,
    selectCartTotalItems,
    selectCartSubTotal,
    selectCartTotalWithShipping,
  ],
  (items, totalItems, subTotal, totalWithShipping) => ({
    items,
    totalItems,
    subTotal,
    shippingFee: 40,
    totalWithShipping,
    isEmpty: items.length === 0,
  })
);
