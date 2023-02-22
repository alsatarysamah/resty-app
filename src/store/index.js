import { configureStore } from "@reduxjs/toolkit";
import { historyReducer } from "./Slices/historySlice";
import {addHistory, delHistory,filterHistory,resetState } from "./Slices/historySlice"




export const store = configureStore({
  reducer: { history:historyReducer },
});


console.log(store.getState());

export {addHistory, delHistory,filterHistory,resetState}