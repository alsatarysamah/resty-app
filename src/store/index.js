import { configureStore } from "@reduxjs/toolkit";
import { historyReducer } from "./Slices/historySlice";
import {addHistory, delHistory,filterHistory,resetState,deletAll } from "./Slices/historySlice"
import { usersReducer } from "./Slices/usersSlice";
import {delUser,resetUser} from "./Slices/usersSlice"


export const store = configureStore({
  reducer: {  users:usersReducer,history:historyReducer},
});



export {addHistory, delHistory,filterHistory,resetState,deletAll,delUser,resetUser}