"use client"
import React from 'react';
import { useCart } from '@/lib/context/cart/context';
import { useRouter } from 'next/navigation';
import { Product } from '@/lib/types';

interface AddToCartProps {
  product: Product;
}

const AddToCartButton: React.FC<AddToCartProps> = ({ product }) => {
  const { dispatch, cart } = useCart();
  const router = useRouter();

  const itemInCart = cart.find((item) => item.id === product?.id);

  const addToCart = () => {
    if(itemInCart){
      router.push('/cart');
    } else {
      console.log('adding to cart',product);
      dispatch({ type: 'ADD_TO_CART', payload: { item: product } });
    }
  };

  return (
    <button
      onClick={addToCart}
      className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition ease-in-out duration-300"
    >
      {itemInCart ? `Go to Cart` : `Add to Cart`}
    </button>
  );
};

export default AddToCartButton;
