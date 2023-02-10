import { useContext } from "react";
import historyContext from "./store";

export default function useHistoryContext(){
    return useContext(historyContext)
}