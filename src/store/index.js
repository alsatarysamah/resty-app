import { configureStore } from "@reduxjs/toolkit";
import { historyReducer } from "./Slices/historySlice";
import {addHistory, delHistory,filterHistory,resetState,deletAll } from "./Slices/historySlice"
import { usersReducer } from "./Slices/usersSlice";
import {delUser} from "./Slices/usersSlice"


export const store = configureStore({
  reducer: { history:historyReducer ,users:usersReducer},
});

console.log(store.getState());

export {addHistory, delHistory,filterHistory,resetState,deletAll,delUser}