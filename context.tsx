// import { createTheme } from '@mui/material';
import React, {
  createContext,
  useContext,
  ReactNode,
  useReducer,
  useMemo,
  useEffect,
} from 'react';
import { ActionType, initialState, InitialStateType, reducer } from './reducer';

const AppContext = createContext<{
  state: InitialStateType;
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

  useEffect(() => {
    if (localStorage.getItem('cartItems')) {
      dispatch({
        type: 'LOCAL',
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        payload: JSON.parse(localStorage.getItem('cartItems') || ''),
      });
    }
  }, []);
  // useEffect(() => {
  //   if(state !== ini)
  // })

  const value = useMemo(() => ({ state, dispatch }), [state, dispatch]);
  // useEffect(() => {
  //   // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  //   state.cart = localStorage.getItem('cartItem')
  //     ? JSON.parse(localStorage.getItem('cartItem') || '')
  //     : [];
  // }, []);
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useGlobalContext = () => useContext(AppContext);
