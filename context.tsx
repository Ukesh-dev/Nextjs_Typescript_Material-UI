import { createTheme } from "@mui/material";
import React, { createContext, useContext, ReactNode, useReducer } from "react";
import { ActionType, initialState, initialStateType, reducer } from "./reducer";

const AppContext = createContext<{
  state: initialStateType;
  dispatch: React.Dispatch<ActionType>;
}>({
  state: initialState,
  dispatch: () => null,
});

export const AppProvider = ({ children }: { children: ReactNode }) => {
  //   const [mode, setMode] = React.useState<'light' | 'dark'>("light");
  //  const theme = React.useMemo(() => createTheme({
  //    palette:{
  //      mode,
  //    }
  //  }),
  //  [mode],
  //  )
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
