import { CartAction, CartState } from "../../types";

export const initialState: CartState = {
  cart: [],
};

export const cartReducer = (
  state: CartState,
  action: CartAction
): CartState => {
  switch (action.type) {
    case "ADD_TO_CART":
      if (action.payload && 'item' in action.payload) {
        return {
          ...state,
          cart: [...state.cart, { ...action.payload.item, quantity: 1 }],
        };
      }
      return state;
    case "INCREMENT_QUANTITY":
      if (action.payload && 'id' in action.payload) {
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }
      return state;
    case "DECREMENT_QUANTITY":
      if (action.payload && 'id' in action.payload) {
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity - 1 }
              : item
          ),
        };
      }
      return state;
    case "REMOVE_FROM_CART":
      if (action.payload && 'id' in action.payload) {
        return {
          ...state,
          cart: state.cart.filter((item) => item.id !== action.payload.id),
        };
      }
      return state;
    case "UPDATE_QUANTITY":
      if (action.payload && 'id' in action.payload && 'quantity' in action.payload) {
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: action.payload.quantity }
              : item
          ),
        };
      }
      return state;
    case "CLEAR_CART":
      return {
        ...state,
        cart: [],
      };
    default:
      return state;
  }
};
