// import { Character } from './interfaces/dataType';

// import { PlaylistAddOutlined } from '@mui/icons-material';
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
  // cart: Cookies.get('cartItems')
  //   ? JSON.parse(Cookies.get('cartItems') || '')
  //   : [],
  cart: [],
};
export type ActionType =
  | { type: 'DARKMODE_ON' }
  | { type: 'DARKMODE_OFF' }
  | { type: 'LOCAL'; payload: CharacterWithPrice[] }
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
    case 'REMOVE': {
      const iitem = state.cart.filter(
        (cartItem) => cartItem.id !== action.payload
      );
      localStorage.setItem('cartItems', JSON.stringify(iitem));
      return {
        ...state,
        cart: iitem,
      };
    }
    case 'CART_ADD_ITEM': {
      const newItem = action.payload;
      const existItem = state.cart.find((item) => item.name === newItem.name);
      const cartItems = existItem
        ? state.cart.map((item) =>
            item.name === existItem.name ? newItem : item
          )
        : [...state.cart, newItem];
      console.log(cartItems);
      // Cookies.set('cartItems', JSON.stringify(cartItems));
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      // const addedCOkkies = JSON.parse(Cookies.get('cartItems') || '');
      // console.log(addedCOkkies);

      return {
        ...state,
        cart: cartItems,
      };
    }
    case 'LOCAL':
      return { ...state, cart: action.payload };
    default:
      return state;
  }
};
