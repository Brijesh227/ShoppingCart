"use client";
import React from "react";
import Link from "next/link";
import { useCart } from "@/lib/context/cart/context";
import CartItem from "@/components/cart/Item";
import CartSummary from "@/components/cart/Summary";

const Cart: React.FC = () => {
  const { cart } = useCart();

  if (cart.length === 0) {
    return (
      <div className="text-center py-8">
        <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
        <Link href="/products">
          <button className="px-4 py-2 bg-primary text-white rounded hover:bg-blue-600 transition-colors">
            Continue Shopping
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col md:flex-row md:space-x-8 p-4 md:p-8">
      <div className="md:w-2/3">
        {cart.map((item) => (
          <div key={item.id} className="mb-4">
            <CartItem item={item} />
          </div>
        ))}
      </div>
      <div className="md:w-1/3 mt-4 md:mt-0">
        <CartSummary />
      </div>
    </div>
  );
};

export default Cart;
