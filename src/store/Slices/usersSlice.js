import { createSlice } from "@reduxjs/toolkit";
import { getItem } from "../../sessionStorage";

const usersSlice = createSlice({
  name: "users",
  initialState: JSON.parse(getItem("app-users")) || [],
  reducers: { 
    delUser(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});
export const { delUser } = usersSlice.actions;
export const usersReducer = usersSlice.reducer;
