import { createSlice } from "@reduxjs/toolkit";
import { getItem } from "../../sessionStorage";

const historySlice = createSlice({
  name: "history",
  initialState:JSON.parse(getItem("history")) || [],
  reducers: {
    addHistory(state, action) {
      state.push(action.payload);
    },
    delHistory(state, action) {
    return state.filter((item) => item.id !== action.payload);
    
    },
    filterHistory(state,action){
      
      return state.filter((record) => record.url === action.payload)
    },
    resetState: (state, action) => {
      return JSON.parse(getItem("history")) || [];
    },
    deletAll:(state,action)=>{
      return [];
    }
  },
});
    
      export const { addHistory, delHistory,filterHistory,resetState, deletAll} = historySlice.actions;
export const historyReducer = historySlice.reducer;
