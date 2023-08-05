import { createSlice } from "@reduxjs/toolkit";

const initialState: {
  cart: any;
  isAuthenticated: boolean;
  user: any;
} = {
  cart: [],
  isAuthenticated: false,
  user: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.cart.find(
        (item: any) => item.id === newItem.id
      );
      if (!existingItem) {
        state.cart.push({ ...newItem, quantity: 1 });
      } else {
        existingItem.quantity += newItem.quantity;
      }
    },
    removeFromCart: (state, action) => {
      const id = action.payload;
      state.cart = state?.cart.filter((item: any) => item.id !== id.id);
    },
    clearCart: (state, action) => {
      state.cart = [];
    },
    login: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload.username;
      localStorage.setItem("user", JSON.stringify(action.payload.username));
    },
    
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      localStorage.removeItem("user");
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
