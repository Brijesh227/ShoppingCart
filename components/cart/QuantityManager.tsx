"use client";
import { useCart } from "@/lib/context/cart/context";
import React from "react";
interface QuantityManagerProps {
  id: number;
  quantity: number;
}
const QuantityManager: React.FC<QuantityManagerProps> = ({ id, quantity }) => {
  const { dispatch } = useCart();

  const handleIncrement = (id: number) => {
    dispatch({ type: "INCREMENT_QUANTITY", payload: { id } });
  };

  const handleDecrement = (id: number) => {
    dispatch({ type: "DECREMENT_QUANTITY", payload: { id } });
  };

  const handleUpdateQuantity = (id: number, quantity: number) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } });
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = parseInt(e.target.value, 10);
    if (!isNaN(newQuantity) && newQuantity >= 0) {
      handleUpdateQuantity(id, newQuantity);
    }
  };

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => handleIncrement(id)}
        className="flex items-center justify-center w-8 h-8 border border-gray-300 text-gray-700 rounded-full hover:border-blue-500"
      >
        +
      </button>
      <input
        type="number"
        value={quantity}
        onChange={handleQuantityChange}
        min="1"
        className="w-12 text-center border border-gray-300 rounded-md focus:outline-none focus:border-blue-500d remove-arrow"
      />
      <button
        onClick={() => handleDecrement(id)}
        className="flex items-center justify-center w-8 h-8 border border-gray-300 text-gray-700 rounded-full hover:border-blue-500 disabled:opacity-50"
        disabled={quantity === 1}
      >
        -
      </button>
    </div>
  );
};

export default QuantityManager;
