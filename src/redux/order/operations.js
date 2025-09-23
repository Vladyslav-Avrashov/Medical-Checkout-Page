import { createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from "../../api/config";

export const createOrder = createAsyncThunk(
  "orders/createOrder",
  async (orderData, { rejectWithValue }) => {
    try {
      const response = await apiClient.post("/orders", orderData);
      return response.data.data;
    } catch (error) {
      // Log the complete error response
      console.error("Full API Error Response:", error.response);
      console.error("Error Status:", error.response?.status);
      console.error("Error Message:", error.response?.data?.message);
      console.error("Error Details:", error.response?.data?.data);
      console.error("Validation Errors:", error.response?.data?.errors);

      const errorMessage = error.response?.data?.message || error.message;
      return rejectWithValue(errorMessage);
    }
  }
);
