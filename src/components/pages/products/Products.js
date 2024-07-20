// /* jshint esversion:6 */
// import React, { useState } from "react";
// import styles from "./Products.module.css"; // Import CSS module for styling
// import appleImage from "../../images/apple.png";
// import AvocadosImage from "../../images/Avocados.png";
// import bananaImage from "../../images/bannan.png";
// import grapeImage from "../../images/sweetgrapes.png";
// import watermelonImage from "../../images/watermelon.png";
// import strawberryImage from "../../images/strawberry.png";
// import peachImage from "../../images/sweet_peach.png";
// import pearImage from "../../images/pear.png";
// import pineappleImage from "../../images/pineapple.png";
// import cherryImage from "../../images/cherries.png";
// import Cart from "../cart/Cart"; // Import the Cart component

// const Products = () => {
//   const [cart, setCart] = useState([]);
//   const [showPopup, setShowPopup] = useState(false);
//   const [quantity, setQuantity] = useState(1);
//   const [confirmingProduct, setConfirmingProduct] = useState(null);

//   // Sample product data (replace with actual data or fetch from API)
//   const products = [
//     {
//       id: 1,
//       name: "Apples",
//       description: "Fresh, organic apples from local farms.",
//       price: "$2.99",
//       imageUrl: appleImage, // Path to your product image
//     },
//     {
//       id: 2,
//       name: "Avocados",
//       description: "Creamy avocados, rich in healthy fats.",
//       price: "$1.99",
//       imageUrl: AvocadosImage, // Path to your product image
//     },
//     {
//       id: 3,
//       name: "Bananas",
//       description: "Naturally sweet and full of potassium.",
//       price: "$1.49",
//       imageUrl: bananaImage,
//     },
//     {
//       id: 4,
//       name: "Sweet Grapes",
//       description: "Delicious grapes perfect for snacking.",
//       price: "$3.49",
//       imageUrl: grapeImage,
//     },
//     {
//       id: 5,
//       name: "Watermelons",
//       description: "Refreshing watermelons for hot summer days.",
//       price: "$4.99",
//       imageUrl: watermelonImage,
//     },
//     {
//       id: 6,
//       name: "Strawberries",
//       description: "Plump strawberries bursting with flavor.",
//       price: "$2.79",
//       imageUrl: strawberryImage,
//     },
//     {
//       id: 7,
//       name: "Sweet Peaches",
//       description: "Sun-kissed peaches from local orchards.",
//       price: "$3.29",
//       imageUrl: peachImage,
//     },
//     {
//       id: 8,
//       name: "Juicy Pears",
//       description: "Fresh pears with a crisp and sweet taste.",
//       price: "$2.49",
//       imageUrl: pearImage,
//     },
//     {
//       id: 9,
//       name: "Tropical Pineapples",
//       description: "Exotic pineapples packed with vitamins.",
//       price: "$3.99",
//       imageUrl: pineappleImage,
//     },
//     {
//       id: 10,
//       name: "Sweet Cherries",
//       description: "Small yet flavorful cherries perfect for snacking.",
//       price: "$3.79",
//       imageUrl: cherryImage,
//     },
//     // Add more products as needed
//   ];

//   const handleAddToCartClick = (product) => {
//     setConfirmingProduct(product);
//     setShowPopup(true);
//   };

//   const confirmAddToCart = () => {
//     const productWithQty = { ...confirmingProduct, qty: quantity };
//     setCart((prevCart) => [...prevCart, productWithQty]);
//     setConfirmingProduct(null);
//     setShowPopup(false);
//     setQuantity(1);
//   };

//   const removeFromCart = (index) => {
//     setCart((prevCart) => prevCart.filter((_, i) => i !== index));
//   };

//   return (
//     <div className={styles.products}>
//       <h2 className={styles.heading}>Our Products</h2>
//       <div className={styles.productList}>
//         {products.map((product) => (
//           <div key={product.id} className={styles.product}>
//             <img
//               src={product.imageUrl}
//               alt={product.name}
//               className={styles.productImage}
//             />
//             <div className={styles.productInfo}>
//               <h3 className={styles.productName}>{product.name}</h3>
//               <p className={styles.productDescription}>{product.description}</p>
//               <p className={styles.productPrice}>{product.price}</p>
//               <button
//                 className={styles.productButton}
//                 onClick={() => handleAddToCartClick(product)}
//               >
//                 Add to Cart
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//       {showPopup && confirmingProduct && (
//         <div className={styles.popup}>
//           <div className={styles.popupContent}>
//             <h3>{confirmingProduct.name}</h3>
//             <p>{confirmingProduct.description}</p>
//             <p>Price: {confirmingProduct.price}</p>
//             <label htmlFor="quantity">Quantity:</label>
//             <input
//               type="number"
//               id="quantity"
//               min="1"
//               value={quantity}
//               onChange={(e) => setQuantity(parseInt(e.target.value))}
//               className={styles.quantityInput}
//             />
//             <p>
//               Total Price: $
//               {(
//                 parseFloat(confirmingProduct.price.slice(1)) * quantity
//               ).toFixed(2)}
//             </p>
//             <div className={styles.popupActions}>
//               <button
//                 onClick={confirmAddToCart}
//                 className={styles.confirmButton}
//               >
//                 Confirm
//               </button>
//               <button
//                 onClick={() => setShowPopup(false)}
//                 className={styles.cancelButton}
//               >
//                 Cancel
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Render the Cart component */}
//       <Cart />
//       <Cart cart={cart} removeFromCart={removeFromCart} />
//     </div>
//   );
// };

// export default Products;

/* jshint esversion:6 */

// import React, { useState } from "react";
// import styles from "./Products.module.css"; // Import CSS module for styling
// import appleImage from "../../images/apple.png";
// import AvocadosImage from "../../images/Avocados.png";
// import bananaImage from "../../images/bannan.png";
// import grapeImage from "../../images/sweetgrapes.png";
// import watermelonImage from "../../images/watermelon.png";
// import strawberryImage from "../../images/strawberry.png";
// import peachImage from "../../images/sweet_peach.png";
// import pearImage from "../../images/pear.png";
// import pineappleImage from "../../images/pineapple.png";
// import cherryImage from "../../images/cherries.png";
// import Cart from "../cart/Cart"; // Import the Cart component

// const Products = () => {
//   const [cart, setCart] = useState([]); // Initialize cart state
//   const [showPopup, setShowPopup] = useState(false);
//   const [quantity, setQuantity] = useState(1);
//   const [confirmingProduct, setConfirmingProduct] = useState(null);

//   // Sample product data (replace with actual data or fetch from API)
//   const products = [
//     {
//       id: 1,
//       name: "Apples",
//       description: "Fresh, organic apples from local farms.",
//       price: "$2.99",
//       imageUrl: appleImage, // Path to your product image
//     },
//     {
//       id: 2,
//       name: "Avocados",
//       description: "Creamy avocados, rich in healthy fats.",
//       price: "$1.99",
//       imageUrl: AvocadosImage, // Path to your product image
//     },
//     {
//       id: 3,
//       name: "Bananas",
//       description: "Naturally sweet and full of potassium.",
//       price: "$1.49",
//       imageUrl: bananaImage,
//     },
//     {
//       id: 4,
//       name: "Sweet Grapes",
//       description: "Delicious grapes perfect for snacking.",
//       price: "$3.49",
//       imageUrl: grapeImage,
//     },
//     {
//       id: 5,
//       name: "Watermelons",
//       description: "Refreshing watermelons for hot summer days.",
//       price: "$4.99",
//       imageUrl: watermelonImage,
//     },
//     {
//       id: 6,
//       name: "Strawberries",
//       description: "Plump strawberries bursting with flavor.",
//       price: "$2.79",
//       imageUrl: strawberryImage,
//     },
//     {
//       id: 7,
//       name: "Sweet Peaches",
//       description: "Sun-kissed peaches from local orchards.",
//       price: "$3.29",
//       imageUrl: peachImage,
//     },
//     {
//       id: 8,
//       name: "Juicy Pears",
//       description: "Fresh pears with a crisp and sweet taste.",
//       price: "$2.49",
//       imageUrl: pearImage,
//     },
//     {
//       id: 9,
//       name: "Tropical Pineapples",
//       description: "Exotic pineapples packed with vitamins.",
//       price: "$3.99",
//       imageUrl: pineappleImage,
//     },
//     {
//       id: 10,
//       name: "Sweet Cherries",
//       description: "Small yet flavorful cherries perfect for snacking.",
//       price: "$3.79",
//       imageUrl: cherryImage,
//     },
//     // Add more products as needed
//   ];

//   const handleAddToCartClick = (product) => {
//     setConfirmingProduct(product);
//     setShowPopup(true);
//   };

//   const confirmAddToCart = () => {
//     const productWithQty = { ...confirmingProduct, qty: quantity };
//     setCart((prevCart) => [...prevCart, productWithQty]);
//     setConfirmingProduct(null);
//     setShowPopup(false);
//     setQuantity(1);
//   };

//   return (
//     <div className={styles.products}>
//       <h2 className={styles.heading}>Our Products</h2>
//       <div className={styles.productList}>
//         {products.map((product) => (
//           <div key={product.id} className={styles.product}>
//             <img
//               src={product.imageUrl}
//               alt={product.name}
//               className={styles.productImage}
//             />
//             <div className={styles.productInfo}>
//               <h3 className={styles.productName}>{product.name}</h3>
//               <p className={styles.productDescription}>{product.description}</p>
//               <p className={styles.productPrice}>{product.price}</p>
//               <button
//                 className={styles.productButton}
//                 onClick={() => handleAddToCartClick(product)}
//               >
//                 Add to Cart
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//       {showPopup && confirmingProduct && (
//         <div className={styles.popup}>
//           <div className={styles.popupContent}>
//             <h3>{confirmingProduct.name}</h3>
//             <p>{confirmingProduct.description}</p>
//             <p>Price: {confirmingProduct.price}</p>
//             <label htmlFor="quantity">Quantity:</label>
//             <input
//               type="number"
//               id="quantity"
//               min="1"
//               value={quantity}
//               onChange={(e) => setQuantity(parseInt(e.target.value))}
//               className={styles.quantityInput}
//             />
//             <p>
//               Total Price: $
//               {(
//                 parseFloat(confirmingProduct.price.slice(1)) * quantity
//               ).toFixed(2)}
//             </p>
//             <div className={styles.popupActions}>
//               <button
//                 onClick={confirmAddToCart}
//                 className={styles.confirmButton}
//               >
//                 Confirm
//               </button>
//               <button
//                 onClick={() => setShowPopup(false)}
//                 className={styles.cancelButton}
//               >
//                 Cancel
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Products;

/* jshint esversion:6 */

import React, { useState, useEffect } from "react";
import styles from "./Products.module.css"; // Import CSS module for styling
import appleImage from "../../images/apple.png";
import AvocadosImage from "../../images/Avocados.png";
import bananaImage from "../../images/bannan.png";
import grapeImage from "../../images/sweetgrapes.png";
import watermelonImage from "../../images/watermelon.png";
import strawberryImage from "../../images/strawberry.png";
import peachImage from "../../images/sweet_peach.png";
import pearImage from "../../images/pear.png";
import pineappleImage from "../../images/pineapple.png";
import cherryImage from "../../images/cherries.png";
import CarrotsImage from "../../images/Carrots.png";
import TomatoesImage from "../../images/Tomatoes.png";
import BroccoliImage from "../../images/Broccoli.png";
import PeppersImage from "../../images/Bell Peppers.png";
import SpinachImage from "../../images/Spinach.png";
import { Navigate } from "react-router-dom";

//import Cart from "../cart/Cart"; // Import the Cart component

const Products = () => {
  const [cart, setCart] = useState([]); // Initialize cart state
  const [showPopup, setShowPopup] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [confirmingProduct, setConfirmingProduct] = useState(null);
  const [categoryFilter, setCategoryFilter] = useState("all"); // Default to show all products
  const [priceFilter, setPriceFilter] = useState(null); // Price filter state
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [navigateToLogin, setNavigateToLogin] = useState(false);

  // Function to add item to cart

  const products = [
    {
      id: 1,
      name: "Rings",
      description: "Elevate Your Lifestyle with Orion Smart Ring",
      price: "₹110",
      imageUrl: appleImage, // Path to your product image
      category: "fruits",
    },
    {
      id: 2,
      name: "Gemstone ",
      description: "Introducing our Radiant Blue Sapphire, a stunning gemstone known for its vibrant color, exceptional clarity, and timeless elegance, perfect for any fine jewelry piece.",
      price: "₹172",
      imageUrl: AvocadosImage, // Path to your product image
      category: "fruits",
    },
    {
      id: 3,
      name: "Necklace - White Stone",
      description: "Elevate your elegance with our stunning necklace featuring a shimmering white stone, perfect for any occasion.",
      price: "₹1700",
      imageUrl: bananaImage,
      category: "fruits",
    },
    {
      id: 4,
      name: " Flower resin jewellery",
      description: "Adorn yourself with our Flower Resin Jewelry, where delicate blooms are preserved in stunning resin for a unique, nature-inspired accessory.",
      price: "₹180",
      imageUrl: grapeImage,
      category: "fruits",
    },
    {
      id: 5,
      name: "Necklace Set For Women",
      description: "Elevate your elegance with our stunning Necklace Set for Women, featuring intricate designs and sparkling accents that perfectly complement any outfit.",
      price: "₹94",
      imageUrl: watermelonImage,
      category: "fruits",
    },
    {
      id: 6,
      name: "Stainless Steel Golden Kiyu Ziyu Bracelet,",
      description: "Elevate your style with the Stainless Steel Golden Kiyu Ziyu Bracelet, featuring a sleek design and a luxurious gold finish that adds a touch of elegance to any outfit",
      price: "₹220",
      imageUrl: strawberryImage,
      category: "fruits",
    },
    {
      id: 7,
      name: "Colourful Acrylic Necklace",
      description: "Brighten your look with our vibrant Colourful Acrylic Necklace, featuring an array of bold hues and modern designs for a playful touch to any outfit.",
      price: "₹275",
      imageUrl: peachImage,
      category: "fruits",
    },
    {
      id: 8,
      name: " Fancy Diamond Gold Earrings",
      description: "Elevate your style with our Fancy Diamond Gold Earrings, featuring exquisite diamonds set in luxurious gold for a dazzling, timeless look",
      price: "₹450",
      imageUrl: pearImage,
      category: "fruits",
    },
    {
      id: 9,
      name: "Korean Jewellery",
      description: "Embrace elegance with our Korean jewelry collection, featuring intricate designs and contemporary styles that reflect timeless beauty and cultural artistry",
      price: "₹75",
      imageUrl: pineappleImage,
      category: "fruits",
    },
    {
      id: 10,
      name: "Gold Unique Bangles",
      description: "Adorn your wrist with our Gold Unique Bangles, featuring intricate designs that blend timeless elegance with modern flair",
      price: "₹110",
      imageUrl: cherryImage,
      category: "fruits",
    },
    // Add more products as needed
    {
      id: 11,
      name: "Wooden Tangram Puzzle ",
      description: "Unleash creativity and critical thinking with our beautifully crafted Wooden Tangram Puzzle, perfect for all ages and skill levels.",
      price: "₹40",
      imageUrl: CarrotsImage,
      category: "vegetables",
    },
    {
      id: 12,
      name: "Gemstone Mushroom Crystal",
      description: "Discover the enchanting Gemstone Mushroom Crystal, a unique decorative piece that combines natural beauty with mystical energy, perfect for enhancing any space",
      price: "₹100",
      imageUrl: TomatoesImage,
      category: "vegetables",
    },
    {
      id: 13,
      name: "Electric Hot water bags for pain relief ",
      description: "Experience soothing relief with our Electric Hot Water Bag, designed for fast heat therapy to alleviate pain and relax muscles.",
      price: "₹100",
      imageUrl: SpinachImage,
      category: "vegetables",
    },
    {
      id: 14,
      name: "Wooden Ring Box, For Packaging",
      description: "Elegant wooden ring box designed for secure and stylish packaging of your precious rings",
      price: "₹210",
      imageUrl: PeppersImage,
      category: "vegetables",
    },
    {
      id: 15,
      name: "PVC Black Dressed Female Figure Toy",
      description: "Introducing our PVC Black Dressed Female Figure Toy, designed for imaginative play with exquisite detailing and a stylish outfit ",
      price: "₹60",
      imageUrl: BroccoliImage,
      category: "vegetables",
    },
    {
      id: 31,
      name: "Women Pink Round Neck  T Shirt",
      description: "Elevate your casual style with our Women's Pink Round Neck T-Shirt, featuring a soft fabric and a flattering fit for everyday comfort.",
      price: "₹149",
      imageUrl: require("../../images/Potato (1).png"),
      category: "snacks",
    },
    {
      id: 38,
      name: "MEN NAVY BLUE LINE PRINTED T-SHIRT",
      description: "Elevate your casual style with our Men's Navy Blue Line Printed T-Shirt, featuring a modern graphic design for a trendy yet comfortable look.",
      price: "₹89",
      imageUrl: require("../../images/Peanut butter cups.png"),
      category: "snacks",
    },
    {
      id: 33,
      name: " HALF SLEEVE GREEN T-SHIRT",
      description: "Elevate your casual style with our comfortable half-sleeve green T-shirt, perfect for any season and versatile enough for any occasion.",
      price: "₹89",
      imageUrl: require("../../images/Popcorn.png"),
      category: "snacks",
    },
    {
      id: 34,
      name: "Trendy Tees",
      description: "Express your unique style with our Trendy Tees, featuring bold designs and comfortable fits for every occasion!",
      price: "₹210",
      imageUrl: require("../../images/Trail mix.png"),
      category: "snacks",
    },
    {
      id: 35,
      name: "Zoro Anime Round Neck T Shirt",
      description: "Show your love for Zoro with this stylish round neck T-shirt featuring a striking design that embodies the spirit of adventure and loyalty from the iconic anime! ",
      price: "₹89",
      imageUrl: require("../../images/cholacte1.png"),
      category: "snacks",
    },

    // {
    //   id: 41,
    //   name: "Rice",
    //   description: "Long grain rice for cooking.",
    //   price: "$2.99",
    //   imageUrl: require("../../images/Rice.png"),
    //   category: "grains",
    // },

    // {
    //   id: 44,
    //   name: "Barley",
    //   description: "Nutritious barley grains.",
    //   price: "$3.29",
    //   imageUrl: require("../../images/Barley.png"),
    //   category: "grains",
    // },
    // {
    //   id: 43,
    //   name: "Oats",
    //   description: "Rolled oats for breakfast.",
    //   price: "$1.99",
    //   imageUrl: require("../../images/Oats.png"),
    //   category: "grains",
    // },
    // {
    //   id: 42,
    //   name: "Quinoa",
    //   description: "Healthy quinoa grains.",
    //   price: "$4.49",
    //   imageUrl: require("../../images/Quinoa.png"),
    //   category: "grains",
    // },
    // {
    //   id: 45,
    //   name: "Couscous",
    //   description: "Versatile couscous for cooking.",
    //   price: "$2.79",
    //   imageUrl: require("../../images/Couscous.png"),
    //   category: "grains",
    //},

    // {
    //   id: 52,
    //   name: "Green Tea",
    //   description: "Refreshing green tea leaves.",
    //   price: "$3.99",
    //   imageUrl: require("../../images/green tea.png"),
    //   category: "beverages",
    // },
    // {
    //   id: 53,
    //   name: "Black Tea",
    //   description: "Classic black tea leaves.",
    //   price: "$2.49",
    //   imageUrl: require("../../images/black tea.png"),
    //   category: "beverages",
    // },
    // {
    //   id: 54,
    //   name: "Herbal Tea",
    //   description: "Calming herbal tea blends.",
    //   price: "$4.29",
    //   imageUrl: require("../../images/Hearbal tea.png"),
    //   category: "beverages",
    // },
    // {
    //   id: 57,
    //   name: "Smoothies",
    //   description: "Healthy and refreshing smoothies.",
    //   price: "$4.99",
    //   imageUrl: require("../../images/Smoothies.png"),
    //   category: "beverages",
    // },
    // {
    //   id: 60,
    //   name: "Soda",
    //   description: "Assorted carbonated sodas.",
    //   price: "$1.49",
    //   imageUrl: require("../../images/soda.png"),
    //   category: "beverages",
    // },

    // More products in other categories (dairy, grains, snacks, beverages)
  ];

  // Load cart from local storage
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  // Retrieve user information from localStorage

  // Check if user exists and is valid

  // Save cart to local storage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  // Function to handle adding a product to the cart
  const handleAddToCartClick = (product) => {
    const user = localStorage.getItem("user");

    if (user) {
      setConfirmingProduct(product);
      setShowPopup(true);
    } else {
      alert("Please log in to add items to cart.");
      setNavigateToLogin(true);
    }
  };
  if (navigateToLogin) {
    return <Navigate to="/login" />;
  }

  // Function to confirm adding product to cart
  const confirmAddToCart = () => {
    const productWithQty = { ...confirmingProduct, qty: quantity };
    setCart((prevCart) => [...prevCart, productWithQty]);
    setConfirmingProduct(null);
    setShowPopup(false);
    setQuantity(1);
  };

  // Function to handle category filter change
  const handleCategoryFilterChange = (category) => {
    setCategoryFilter(category);
  };

  // Function to handle price filter change
  const handlePriceFilterChange = (event) => {
    const selectedPriceFilter = event.target.value;
    setPriceFilter(selectedPriceFilter);
  };

  const removeFromCart = (index) => {
    setCart((prevCart) => prevCart.filter((_, i) => i !== index));
  };

  // Apply category and price filters to products
  let filteredProducts = products.filter(
    (product) => categoryFilter === "all" || product.category === categoryFilter
  );

  if (priceFilter === "highToLow") {
    filteredProducts.sort(
      (a, b) => parseFloat(b.price.slice(1)) - parseFloat(a.price.slice(1))
    );
  } else if (priceFilter === "lowToHigh") {
    filteredProducts.sort(
      (a, b) => parseFloat(a.price.slice(1)) - parseFloat(b.price.slice(1))
    );
  }

  return (
    <div className={styles.products}>
      <h2 className={styles.heading}>Our Products</h2>
      {/* Category Filter Buttons */}
      <div className={styles.categoryFilter}>
        <button
          onClick={() => handleCategoryFilterChange("all")}
          className={categoryFilter === "all" ? styles.active : ""}
        >
          All
        </button>
        <button
          onClick={() => handleCategoryFilterChange("fruits")}
          className={categoryFilter === "fruits" ? styles.active : ""}
        >
          jewellery
        </button>
        <button
          onClick={() => handleCategoryFilterChange("vegetables")}
          className={categoryFilter === "vegetables" ? styles.active : ""}
        >
          Toys
        </button>
        <button
          onClick={() => handleCategoryFilterChange("snacks")}
          className={categoryFilter === "snacks" ? styles.active : ""}
        >
           T-Shirts
        </button>
        {/* <button
          onClick={() => handleCategoryFilterChange("grains")}
          className={categoryFilter === "grains" ? styles.active : ""}
        >
          Grains
        </button> */}
        {/* <button
          onClick={() => handleCategoryFilterChange("beverages")}
          className={categoryFilter === "beverages" ? styles.active : ""}
        >
          Beverages
        </button> */}

        <div className={styles.filterGroup}>
          <span>Price:</span>
          <select onChange={handlePriceFilterChange}>
            <option value="">Sort by Price</option>
            <option value="highToLow">High to Low</option>
            <option value="lowToHigh">Low to High</option>
          </select>
        </div>
      </div>

      {/* Product List */}
      <div className={styles.productList}>
        {filteredProducts.map((product) => (
          <div key={product.id} className={styles.product}>
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
                onClick={() => handleAddToCartClick(product)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Popup for confirming product addition to cart */}
      {showPopup && confirmingProduct && (
        <div className={styles.popup}>
          <div className={styles.popupContent}>
            <h3>{confirmingProduct.name}</h3>
            <p>{confirmingProduct.description}</p>
            <p>Price: {confirmingProduct.price}</p>
            <label htmlFor="quantity">Quantity:</label>
            <input
              type="number"
              id="quantity"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value))}
              className={styles.quantityInput}
            />
            <p>
              Total Price: ₹
              {(
                parseFloat(confirmingProduct.price.slice(1)) * quantity
              ).toFixed(2)}
            </p>
            <div className={styles.popupActions}>
              <button
                onClick={confirmAddToCart}
                className={styles.confirmButton}
              >
                Confirm
              </button>
              <button
                onClick={() => setShowPopup(false)}
                className={styles.cancelButton}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Render the Cart component */}
    </div>
  );
};

export default Products;

//   // Function to handle adding a product to the cart
//   const handleAddToCartClick = (product) => {
//     setConfirmingProduct(product);
//     setShowPopup(true);
//   };

//   // Function to confirm adding product to cart
//   const confirmAddToCart = () => {
//     const productWithQty = { ...confirmingProduct, qty: quantity };
//     setCart((prevCart) => [...prevCart, productWithQty]);
//     setConfirmingProduct(null);
//     setShowPopup(false);
//     setQuantity(1);
//   };

//   // Function to handle category filter change
//   const handleCategoryFilterChange = (category) => {
//     setCategoryFilter(category);
//   };

//   // Function to handle price filter change
//   const handlePriceFilterChange = (event) => {
//     const selectedPriceFilter = event.target.value;
//     setPriceFilter(selectedPriceFilter);
//   };

//   // Apply price filter to products
//   let filteredProducts = [...products];

//   if (priceFilter === "highToLow") {
//     filteredProducts.sort(
//       (a, b) => parseFloat(b.price.slice(1)) - parseFloat(a.price.slice(1))
//     );
//   } else if (priceFilter === "lowToHigh") {
//     filteredProducts.sort(
//       (a, b) => parseFloat(a.price.slice(1)) - parseFloat(b.price.slice(1))
//     );
//   }

//   // Filtered products based on category selection

//   return (
//     <div className={styles.products}>
//       <h2 className={styles.heading}>Our Products</h2>
//       {/* Category Filter Buttons */}
//       <div className={styles.categoryFilter}>
//         <button
//           onClick={() => handleCategoryFilterChange("all")}
//           className={categoryFilter === "all" ? styles.active : ""}
//         >
//           All
//         </button>
//         <button
//           onClick={() => handleCategoryFilterChange("fruits")}
//           className={categoryFilter === "fruits" ? styles.active : ""}
//         >
//           Fruits
//         </button>
//         <button
//           onClick={() => handleCategoryFilterChange("vegetables")}
//           className={categoryFilter === "vegetables" ? styles.active : ""}
//         >
//           Vegetables
//         </button>

//         <button
//           onClick={() => handleCategoryFilterChange("snacks")}
//           className={categoryFilter === "snacks" ? styles.active : ""}
//         >
//           Snacks
//         </button>
//         <button
//           onClick={() => handleCategoryFilterChange("grains")}
//           className={categoryFilter === "grains" ? styles.active : ""}
//         >
//           Grains
//         </button>

//         <button
//           onClick={() => handleCategoryFilterChange("beverages")}
//           className={categoryFilter === "beverages" ? styles.active : ""}
//         >
//           Beverages
//         </button>

//         <div className={styles.filterGroup}>
//           <span>Price:</span>
//           <select onChange={handlePriceFilterChange}>
//             <option value="">Sort by Price</option>
//             <option value="highToLow">High to Low</option>
//             <option value="lowToHigh">Low to High</option>
//           </select>
//         </div>

//         {/* Add more category buttons as needed */}
//       </div>

//       {/* Product List */}
//       <div className={styles.productList}>
//         {filteredProducts.map((product) => (
//           <div key={product.id} className={styles.product}>
//             <img
//               src={product.imageUrl}
//               alt={product.name}
//               className={styles.productImage}
//             />
//             <div className={styles.productInfo}>
//               <h3 className={styles.productName}>{product.name}</h3>
//               <p className={styles.productDescription}>{product.description}</p>
//               <p className={styles.productPrice}>{product.price}</p>
//               <button
//                 className={styles.productButton}
//                 onClick={() => handleAddToCartClick(product)}
//               >
//                 Add to Cart
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Popup for confirming product addition to cart */}
//       {showPopup && confirmingProduct && (
//         <div className={styles.popup}>
//           <div className={styles.popupContent}>
//             <h3>{confirmingProduct.name}</h3>
//             <p>{confirmingProduct.description}</p>
//             <p>Price: {confirmingProduct.price}</p>
//             <label htmlFor="quantity">Quantity:</label>
//             <input
//               type="number"
//               id="quantity"
//               min="1"
//               value={quantity}
//               onChange={(e) => setQuantity(parseInt(e.target.value))}
//               className={styles.quantityInput}
//             />
//             <p>
//               Total Price: $
//               {(
//                 parseFloat(confirmingProduct.price.slice(1)) * quantity
//               ).toFixed(2)}
//             </p>
//             <div className={styles.popupActions}>
//               <button
//                 onClick={confirmAddToCart}
//                 className={styles.confirmButton}
//               >
//                 Confirm
//               </button>
//               <button
//                 onClick={() => setShowPopup(false)}
//                 className={styles.cancelButton}
//               >
//                 Cancel
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Render the Cart component */}
//       {/* <Cart cart={cart} removeFromCart={removeFromCart} /> */}
//     </div>
//   );
// };

// export default Products;
