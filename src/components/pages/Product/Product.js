/* jshint esversion:6 */
import React from "react";
import styles from "./Product.module.css";

const Product = ({ product, addToCart }) => (
  <div className={styles.product}>
    <img
      src={product.imageUrl}
      alt={product.name}
      className={styles.productImage}
    />
    <div className={styles.productInfo}>
      <h3 className={styles.productName}>{product.name}</h3>
      <p className={styles.productDescription}>{product.description}</p>
      <p className={styles.productPrice}>{product.price}</p>

      <button
        className={styles.productButton}
        onClick={() => addToCart(product)}
      >
        Add to Cart
      </button>
    </div>
  </div>
);

export default Product;
