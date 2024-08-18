import Image from "next/image";
import React from "react";

interface ProductProps {
  image: string;
  name: string;
  price: number;
}

const ProductCard: React.FC<ProductProps> = ({ image, name, price }) => {
  return (
    <>
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill={true}
          className="object-cover hover:scale-110 transition-transform duration-300 ease-in-out"
        />
      </div>
      <div className="pt-4 px-4">
        <div className="font-semibold text-gray-800 mb-2 line-clamp-2">
          {name}
        </div>
        <div className="text-gray-600 font-medium mb-2">
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(price)}
        </div>
      </div>
    </>
  );
};

export default ProductCard;
