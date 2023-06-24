import { createSlice } from "@reduxjs/toolkit";
// import { userLogin } from "../asyncActions/user.async";

const initialState: {
  loader: boolean;
} = {
  loader: false,
};

const loaderSlice = createSlice({
  name: "loader",
  initialState,
  reducers: {
    isLoader: (state, action) => {
      state.loader = action.payload;
    },
  },
  //   extraReducers: (builder) => {
  //     builder.addCase(userLogin.fulfilled, (state, action) => {
  //       // store State hear
  //     });
  //   },
});

export const loaderActions = loaderSlice.actions;
export default loaderSlice.reducer;
