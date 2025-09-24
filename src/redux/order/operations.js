import { createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from "../../api/config";

export const createOrder = createAsyncThunk(
  "orders/createOrder",
  async (orderData, { rejectWithValue }) => {
    try {
      const response = await apiClient.post("/orders", orderData);
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
