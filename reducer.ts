// import { Character } from './interfaces/dataType';

import Cookies from 'js-cookie';
import { CharacterWithPrice } from './interfaces/dataType';

// export interface CartItemType extends Character{

// }
export type InitialStateType = {
  darkmode: boolean;
  cart: CharacterWithPrice[];
};
export const initialState: InitialStateType = {
  darkmode: false,
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  cart: Cookies.get('cartItems')
    ? JSON.parse(Cookies.get('cartItems') || '')
    : [],
};
export type ActionType =
  | { type: 'DARKMODE_ON' }
  | { type: 'DARKMODE_OFF' }
  | { type: 'TEST' }
  | { type: 'CLEAR_CART' }
  | { type: 'REMOVE'; payload: number }
  | { type: 'CART_ADD_ITEM'; payload: CharacterWithPrice };
export const reducer = (state: InitialStateType, action: ActionType) => {
  switch (action.type) {
    case 'DARKMODE_ON':
      return { ...state, darkmode: true };

    case 'DARKMODE_OFF':
      return { ...state, darkmode: false };
    case 'TEST':
      console.log('Hello From reducer');
      return state;
    case 'CLEAR_CART':
      return { ...state, cart: [] };
    case 'REMOVE':
      return {
        ...state,
        cart: state.cart.filter((cartItem) => cartItem.id !== action.payload),
      };
    case 'CART_ADD_ITEM': {
      const newItem = action.payload;
      const existItem = state.cart.find((item) => item.name === newItem.name);
      const cartItems = existItem
        ? state.cart.map((item) =>
            item.name === existItem.name ? newItem : item
          )
        : [...state.cart, newItem];
      Cookies.set('cartItems', JSON.stringify(cartItems));

      return {
        ...state,
        cart: cartItems,
      };
    }
    default:
      return state;
  }
};
