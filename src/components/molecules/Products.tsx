import React from "react";
import Button from "../atoms/Button";
import styles from "./Products.module.css";

const Products: React.FC< { products: {id: number, title: string, price: string} [] } > = ({ products }) => {
  return (
    <div className={styles.products}>
      <h3>Products</h3>
        <div className={styles.productsContainer}>
          {
            products.map((product) =>
              <>
                <div key={product.id} className={styles.product}>{product.title}</div>
                <div className={styles.productName}>{product.price}</div>
              </>
            )
          }
        </div>
      <Button label="What food do I love" onClick={() => alert("Cheeseburgers")} />
    </div>
  );
};

export default Products;
