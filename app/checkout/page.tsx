"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { useCart } from "@/lib/context/cart/context";

const Checkout: React.FC = () => {
  const { cart, dispatch } = useCart();

  useEffect(() => {
    return () => {
      dispatch({ type: "CLEAR_CART" });
    };
  }, [dispatch]);

  return (
    <div className="text-center py-8 px-4">
      {cart.length > 0 ? (
        <div className="bg-white shadow-md rounded-lg border border-gray-200 p-6 mx-auto max-w-md">
          <h2 className="text-2xl font-bold mb-6">Your order</h2>
          <h3 className="text-xl font-semibold mb-4">
            Order Placed Successfully!
          </h3>
          <p className="text-gray-700 mb-4">
            Thank you for your purchase. Your order has been placed
            successfully.
          </p>
          <Link href="/products">
            <button className="w-full px-4 py-2 bg-primary text-white rounded hover:bg-blue-600 transition-colors">
              Continue Shopping
            </button>
          </Link>
        </div>
      ) : (
        <div className="text-center py-8">
          <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
          <Link href="/products">
            <button className="px-4 py-2 bg-primary text-white rounded hover:bg-blue-600 transition-colors">
              Continue Shopping
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Checkout;
