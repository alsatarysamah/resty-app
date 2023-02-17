import { createSlice } from "@reduxjs/toolkit";



const historySlice = createSlice({
    name: "history",
    initialState: JSON.parse(sessionStorage.getItem("history"))||[],
    reducers: {
      addHistory(state, action) {
        console.log(action.payload);
        state.push(action.payload);
      },
      delHistory(state, action) {
        console.log(state);
        let index = state.indexOf(action.payload);
        state.splice(index, 1);
      },
   
      
    },
  
  });
export const { addHistory, delHistory } = historySlice.actions;
export const historyReducer= historySlice.reducer;