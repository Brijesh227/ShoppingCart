"use client";
import { useCart } from '@/lib/context/cart/context';

const Cart: React.FC = () => {
    const { cart } = useCart();
  
    const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  
    return (
      <div className="p-4 bg-white shadow rounded-lg border border-gray-200">
        <h2 className="text-xl font-bold mb-4">Cart Summary</h2>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span>Subtotal</span>
            <span className="font-semibold text-lg">${subtotal.toFixed(2)}</span>
          </div>
          <div className="text-center">
            <button className="w-full px-4 py-2 bg-primary text-white rounded hover:bg-blue-600 transition-colors">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default Cart;
  