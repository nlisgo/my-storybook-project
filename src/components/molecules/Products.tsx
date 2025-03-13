import React from "react";
import Button from "../atoms/Button";
import "./Products.css";

const Products: React.FC< { products: {id: number, title: string, price: string} [] } > = ({ products }) => {
  return (
    <div className="products">
      <h3>Products</h3>
        <div className="productsContainer">
          {
            products.map((product) =>
              <>
                <div key={product.id} className="product">{product.title}</div>
                <div className="productName">{product.price}</div>
              </>
            )
          }
        </div>
      <Button label="What food do I love" onClick={() => alert("Cheeseburgers")} />
    </div>
  );
};

export default Products;
