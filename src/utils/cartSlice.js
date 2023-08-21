import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state) => {
      state.items.pop();
    },
    clearCart: (state) => {
      return { items: [] };
    },
  },
});

// createSlice() function will return this object
// {
//     actions{
//         addItem, removeItem, clearCart;
//     },
//     reducer // whole reducer
// }

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
