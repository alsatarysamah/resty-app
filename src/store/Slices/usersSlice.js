import { createSlice } from "@reduxjs/toolkit";
import { getItem } from "../../sessionStorage";

const usersSlice = createSlice({
  name: "users",
  initialState: JSON.parse(getItem("app-users")) || [],
  reducers: {
    delUser(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
    resetUser(state, action) {
      return JSON.parse(getItem("app-users")) || [];
    },
  },
});
export const { delUser, resetUser } = usersSlice.actions;
export const usersReducer = usersSlice.reducer;
