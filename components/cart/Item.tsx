"use client";
import React from "react";
import { useCart } from "@/lib/context/cart/context";
import ProductCard from "../product/Card";
import QuantityManager from "./QuantityManager";
import { CartItem } from "@/lib/types";

interface CartItemProps {
  item: CartItem;
}

const Cart: React.FC<CartItemProps> = ({ item }) => {
  const { dispatch } = useCart();

  const handleRemove = (id: number) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: { id } });
  };

  return (
    <div className="grid grid-cols-3 gap-4 items-center bg-white shadow rounded-lg">
      <div className="col-span-1">
        <ProductCard image={item.images[0]} name={item.title} price={item.price} />
      </div>
      <div className="col-span-1 flex justify-center">
        <QuantityManager id={item.id} quantity={item.quantity} />
      </div>
      <div className="col-span-1 flex justify-center">
        <button
          onClick={() => handleRemove(item.id)}
          className="px-4 py-2 text-white bg-primary rounded"
        >
          Remove Item
        </button>
      </div>
    </div>
  );
};

export default Cart;
