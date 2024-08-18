"use client";
import React, { useState } from "react";
import { useCart } from "@/lib/context/cart/context";
import DiscountForm from "./DiscountForm";
import { useRouter } from "next/navigation";

const Cart: React.FC = () => {
  const { cart } = useCart();
  const router = useRouter();

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleCheckout = () => {
    router.push("/checkout");
  };

  const [fixedDiscount, setFixedDiscount] = useState<number>(0);
  const [percentageDiscount, setPercentageDiscount] = useState<number>(0);

  const percentageDiscountAmount = (subtotal * percentageDiscount) / 100;
  const totalDiscount = fixedDiscount + percentageDiscountAmount;

  const finalPrice = subtotal - totalDiscount;

  return (
    <div className="p-4 bg-white shadow rounded-lg border border-gray-200">
      <h2 className="text-xl font-bold mb-4">Price Detail</h2>
      <div className="space-y-4">
        <DiscountForm
          setFixedDiscount={setFixedDiscount}
          setPercentageDiscount={setPercentageDiscount}
        />

        <div className="flex justify-between items-center">
          <span>Subtotal</span>
          <span className="font-semibold text-lg">${subtotal.toFixed(2)}</span>
        </div>

        <div className="flex justify-between items-center">
          <span>Fixed Discount</span>
          <span className="font-semibold text-lg">
            -${fixedDiscount.toFixed(2)}
          </span>
        </div>

        <div className="flex justify-between items-center">
          <span>Percentage Discount</span>
          <span className="font-semibold text-lg">
            -${percentageDiscountAmount.toFixed(2)}
          </span>
        </div>

        <div className="flex justify-between items-center font-bold border-t border-gray-300 pt-4">
          <span>Total Price</span>
          <span className="text-lg text-green-600">
            ${finalPrice.toFixed(2)}
          </span>
        </div>

        <div className="text-center">
          <button
            onClick={handleCheckout}
            className="w-full px-4 py-2 bg-primary text-white rounded hover:bg-blue-600 transition-colors"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
