/* jshint esversion:6 */

//import React from "react";
// import styles from "./Cart.module.css"; // Import CSS module for styling

// const Cart = ({ cart }) => {
//   const getTotalCost = () => {
//     return cart
//       .reduce(
//         (total, product) =>
//           total + parseFloat(product.price.slice(1)) * product.qty,
//         0
//       )
//       .toFixed(2);
//   };

//   const removeFromCart = (index) => {
//     const updatedCart = [...cart];
//     updatedCart.splice(index, 1);
//     localStorage.setItem("cart", JSON.stringify(updatedCart));
//     window.location.reload(); // Reload page to update the cart state
//   };

//   return (
//     <div className={styles.cart}>
//       <h2 className={styles.heading}>Your Cart</h2>
//       {cart.length === 0 ? (
//         <p className={styles.emptyCartMessage}>Your cart is empty.</p>
//       ) : (
//         <div>
//           {cart.map((product, index) => (
//             <div key={index} className={styles.cartItem}>
//               <img
//                 src={product.imageUrl}
//                 alt={product.name}
//                 className={styles.cartImage}
//               />
//               <div className={styles.cartInfo}>
//                 <h3 className={styles.cartName}>{product.name}</h3>
//                 <p className={styles.cartPrice}>
//                   $
//                   {(parseFloat(product.price.slice(1)) * product.qty).toFixed(
//                     2
//                   )}
//                 </p>
//                 <p className={styles.cartQuantity}>Quantity: {product.qty}</p>
//                 <button
//                   onClick={() => removeFromCart(index)}
//                   className={styles.removeButton}
//                 >
//                   Remove
//                 </button>
//               </div>
//             </div>
//           ))}
//           <h3 className={styles.total}>Total Cost: ${getTotalCost()}</h3>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Cart;

import React, { useState, useEffect } from "react";
import styles from "./Cart.module.css"; // Import CSS module for styling

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  // Load cart from local storage when the component mounts
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  const getTotalCost = () => {
    return cart
      .reduce(
        (total, product) =>
          total + parseFloat(product.price.slice(1)) * product.qty,
        0
      )
      .toFixed(2);
  };

  const removeFromCart = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handlePayment = (e) => {
    e.preventDefault();
    const totalCost = getTotalCost() * 100; // Convert to paise

    const options = {
      key: "rzp_test_4DfKI1IJPjuOrK", // Replace with your Razorpay key ID
      amount: totalCost, // Razorpay amount is in paise
      currency: "INR",
      name: "ChicBudget",
      description: "Thank you for your purchase",
      handler: function (response) {
        setPaymentSuccess(true);
        // Optionally, save the payment details or send them to your server
        console.log(response);
      },
      prefill: {
        name: "Your Name",
        email: "tdhayanandk@gmail.com",
        contact: "9600614907",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  return (
    <div className={styles.cart}>
      <h2 className={styles.heading}>Your Cart</h2>
      {cart.length === 0 ? (
        <p className={styles.emptyCartMessage}>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((product, index) => (
            <div key={index} className={styles.cartItem}>
              <img
                src={product.imageUrl}
                alt={product.name}
                className={styles.cartImage}
              />
              <div className={styles.cartInfo}>
                <h3 className={styles.cartName}>{product.name}</h3>
                <p className={styles.cartPrice}>
                  ₹
                  {(parseFloat(product.price.slice(1)) * product.qty).toFixed(2)}
                </p>
                <p className={styles.cartQuantity}>Quantity: {product.qty}</p>
                <button
                  onClick={() => removeFromCart(index)}
                  className={styles.removeButton}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <h3 className={styles.total}>Total Cost: ₹{getTotalCost()}</h3>
          {paymentSuccess ? (
            <p className={styles.successMessage}>Payment Successful!</p>
          ) : (
            <button onClick={handlePayment} className={styles.payButton}>
              Pay ₹{getTotalCost()}
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Cart;

