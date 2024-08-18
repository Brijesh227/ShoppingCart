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
      if (action?.payload?.item) {
        return {
          ...state,
          cart: [...state.cart, { ...action?.payload?.item, quantity: 1 }],
        };
      }
    case "INCREMENT_QUANTITY":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };
    case "DECREMENT_QUANTITY":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ),
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case "UPDATE_QUANTITY":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };
    case "CLEAR_CART":
      return {
        ...state,
        cart: [],
      };
    default:
      return state;
  }
};

//   if (itemInCart) {
//     return {
//       ...state,
//       cart: state.cart.map((item) =>
//         item.id === action.payload.id
//           ? { ...item, quantity: item.quantity + 1 }
//           : item
//       ),
//     };
//   }
