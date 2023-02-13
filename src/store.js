import { useReducer } from "react";
import { createContext } from "react";
const inisialState = {
  historyRecords: JSON.parse(sessionStorage.getItem("history")) || [],
  currentRecored: {
    url: "",
    method: "",
    body:"",
    result: " ",
    username: "",
    password: "",
    token: "",
  },
};
const historyContext = createContext();

function reducer(state, action) {
  const { type, payload } = action;
  switch (type) {
    case "CREATE":
      return { ...state, historyRecords: [...state.historyRecords, payload] };
    case "EDIT":
      let arr = state?.book?.map((history) => {
        if (history.id === payload.id)
          return { ...history, title: payload.title };
        return history;
      });
      return { ...state, historyRecords: arr };
    case "DEL":
      const filtered = state?.historyRecords?.filter(
        (item) => item.id != payload
      );
      sessionStorage.setItem("history", JSON.stringify(filtered));

      return { ...state, historyRecords: [...filtered] };
    case "SET-USER":
      return {
        ...state,
        currentRecored: {
          ...state.currentRecored,
          username: payload.username,
          password: payload.password,
        },
      };
    default:
      return state;
  }
}
export function HistoryProvieder({ children }) {
  const [state, dispatch] = useReducer(reducer, inisialState);
  const value = { state, dispatch };
  return (
    <historyContext.Provider value={value}>{children}</historyContext.Provider>
  );
}
export default historyContext;
