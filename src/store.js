import { useReducer } from "react";
import { createContext } from "react";
const inisialState = {
  historyRecords: JSON.parse(sessionStorage.getItem("history")) || [],
};
const historyContext = createContext();

function reducer(state, action) {
  console.log({state});
  const { type, paylod } = action;
  switch (type) {
    case "CREATE":
      return { ...state, historyRecords: [...state?.historyRecords, paylod] };
    case "EDIT":
      let arr = state?.book?.map((history) => {
        if (history.id === paylod.id)
          return { ...history, title: paylod.title };
        return history;
      });
      return { ...state, historyRecords: arr };
    case "DEL":
      console.log("Dellllllllllllllllllllllll 123456");
      const filtered = state?.historyRecords?.filter(
        (item) => item.id != paylod.id
      );
      console.log("Delllllllllllllllllllllllllllll  12");
      return { ...state, historyRecords: [...filtered] };
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
