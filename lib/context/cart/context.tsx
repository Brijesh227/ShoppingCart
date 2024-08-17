"use client"
import React, { createContext, useContext, useReducer, ReactNode, Dispatch } from "react";
import { CartItem, CartAction } from '../../types';
import { initialState, cartReducer } from './reducer';

interface CartContextType {
  cart: CartItem[];
  dispatch: Dispatch<CartAction>;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export function CartProvider ({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ cart: state.cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};