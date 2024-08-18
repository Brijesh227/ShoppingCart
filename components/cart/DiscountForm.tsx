import { useState } from "react";

const DiscountForm: React.FC<{
  setFixedDiscount: any;
  setPercentageDiscount: any;
}> = ({ setFixedDiscount, setPercentageDiscount }) => {
  const [discountCode, setDiscountCode] = useState<string>("");

  const applyDiscount = () => {
    if (discountCode === "FLAT10") {
      setFixedDiscount(10);
    } else if (discountCode === "SAVE10") {
      setPercentageDiscount(10);
    } else {
      alert("Invalid discount code");
    }
  };

  return (
    <div className="mb-4">
      <input
        type="text"
        value={discountCode}
        onChange={(e) => setDiscountCode(e.target.value)}
        placeholder="Enter discount code"
        className="w-full px-4 py-2 border border-gray-300 rounded mb-2"
      />
      <button
        onClick={applyDiscount}
        className="w-full px-4 py-2 bg-primary text-white rounded hover:bg-blue-600 transition-colors"
      >
        Apply Discount
      </button>
    </div>
  );
};

export default DiscountForm;
