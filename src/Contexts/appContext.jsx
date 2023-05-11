import { createContext, useEffect, useReducer } from "react";
import { initialState, reducer } from "../Reducer/appReducer";

export const AppContext = createContext();

let localState = localStorage.getItem('AppState');

let initialStateValue = localState ? JSON.parse(localState) : initialState;

const AppContextWrapper = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialStateValue);
  const contextValue = { state, dispatch };

  useEffect(() => {
    localStorage.setItem('AppState', JSON.stringify(state));
  },[state])

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export default AppContextWrapper;
