import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
  callCount: 0,
};

const countSlice = createSlice({
  name: 'countSlice',
  initialState,
  reducers: {
    incCount: (state, action) => {
      return {
        ...state,
        count: state.count + action.payload,
        callCount: state.callCount + action.payload,
      };
    },

    decCount: (state, action) => {
      return {
        ...state,
        count: state.count - action.payload,
        callCount: state.callCount + action.payload,
      }
    },

    resetCount: (state, action) => {
      return {
        ...state,
        count: action.payload,
        callCount: action.payload,
      }
    }
  },
});

export const { incCount, decCount, resetCount } = countSlice.actions;

const countReducer = countSlice.reducer;

export default countReducer
