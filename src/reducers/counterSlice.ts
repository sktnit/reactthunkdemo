import { createSlice } from "@reduxjs/toolkit";
const initialState: Record<string, number> = { count: 0 };

const { actions, reducer } = createSlice({
  name: "count",
  initialState,
  reducers: {
    increment: (state, action) => {
      console.log(state, action.payload);
      state.count += 1;
    },
    decrement: (state, action) => {
      if (state.count > 0) state.count -= 1;
    },
  },
});

export const { increment, decrement } = actions;

// export const incrementAsync = (amount: number) => (dispatch: any) => {
//   setTimeout(() => {
//     dispatch(increment(amount));
//   }, 1000);
// };

export default reducer;
