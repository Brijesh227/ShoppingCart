import React from "react";
import Card from "@/components/product/Card";
import AddToCartButton from "@/components/product/AddToCard";

export async function fetchProductList() {
  try {
    const response = await fetch(
      "https://dummyjson.com/products?limit=10&skip=0&select=title,price,images,id"
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

async function ProductListPage() {
  const productList = await fetchProductList();

  if (!productList || productList.products.length === 0) {
    return <div>No products found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {productList.products.map((product: any) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow ease-in-out overflow-hidden"
          >
            <Card
              image={product.images[0]}
              name={product.title}
              price={product.price}
            />
            <div className="p-4">
              <AddToCartButton product={product} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductListPage;
