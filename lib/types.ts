export interface Product {
  id: number;
  title: string;
  price: number;
  images: string[];
};

export interface CartItem extends Product {
  quantity: number;
}
  
export interface CartState {
  cart: CartItem[];
}

export type CartAction =
  | { type: 'ADD_TO_CART'; payload: {  item: Product } }
  | { type: 'REMOVE_FROM_CART'; payload: { id: number } }
  | { type: 'INCREMENT_QUANTITY'; payload: { id: number } }
  | { type: 'DECREMENT_QUANTITY'; payload: { id: number } }
  | { type: 'UPDATE_QUANTITY'; payload: { id: number; quantity: number } };
