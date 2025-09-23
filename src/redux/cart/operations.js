import { createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from "../../api/config";

export const fetchCart = createAsyncThunk(
  "cart/fetchCart",
  async (_, { rejectWithValue }) => {
    try {
      const response = await apiClient.get("/cart");
      return response.data.cart;
    } catch (error) {
      return rejectWithValue(error.message || "Failed to fetch cart");
    }
  }
);

export const removeFromCart = createAsyncThunk(
  "cart/removeFromCart",
  async (cartItemId, { rejectWithValue }) => {
    try {
      await apiClient.delete(`/cart/${cartItemId}`);
      return cartItemId;
    } catch (error) {
      return rejectWithValue(
        error.message || "Failed to remove item from cart"
      );
    }
  }
);
