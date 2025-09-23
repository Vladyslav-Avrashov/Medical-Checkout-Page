import { createSlice } from "@reduxjs/toolkit";
import { createOrder } from "./operations";

const initialState = {
  currentOrder: null,
  loading: false,
  error: null,
  createOrderSuccess: false,
};

const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
    clearCreateOrderSuccess: (state) => {
      state.createOrderSuccess = false;
    },
    clearCurrentOrder: (state) => {
      state.currentOrder = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createOrder.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.createOrderSuccess = false;
      })
      .addCase(createOrder.fulfilled, (state, action) => {
        state.loading = false;
        state.createOrderSuccess = true;
        state.currentOrder = action.payload;
      })
      .addCase(createOrder.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.createOrderSuccess = false;
      });
  },
});

export const { clearError, clearCreateOrderSuccess, clearCurrentOrder } =
  ordersSlice.actions;

export const ordersReducer = ordersSlice.reducer;
