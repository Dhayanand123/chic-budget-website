/*

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Products from "./pages/products/Products";
import Contact from "./pages/contact/Contact";
import "./assets/css/App.css";

const App = () => (
  <Router>
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  </Router>
);

export default App;
*/
/* jshint esversion:6 */

// import React, { useState } from "react";
// import Header from "./components/common/Header";
// import Footer from "./components/common/Footer";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Home from "./components/pages/home/Home";
// import About from "./components/pages/about/About";
// import Products from "./components/pages/products/Products";
// import Login from "./components/pages/login/Login";
// import Contact from "./components/pages/contact/Contact";
// import Cart from "./components/pages/cart/Cart";
// import "./App.css";

// const App = () => (
//   const [cart, setCart] = useState([]); // Initialize cart state

//   // Function to add product to cart
//   const addToCart = (product) => {
//     setCart((prevCart) => [...prevCart, product]);
//   };

//   // Function to remove product from cart (if needed)
//   const removeFromCart = (productId) => {
//     setCart((prevCart) => prevCart.filter((product) => product.id !== productId));
//   };

//   <Router>
//     <div className="App">
//       <Header />
//       <main>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/products" element={<Products />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/cart" element={<Cart />} />
//           <Route path="/login" element={<Login />} />
//         </Routes>
//       </main>
//       <Footer />
//     </div>{" "}
//   </Router>
// );

// export default App;
import React, { useState } from "react";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/pages/home/Home";
import About from "./components/pages/about/About";
import Products from "./components/pages/products/Products";
import Login from "./components/pages/login/Login";
import Contact from "./components/pages/contact/Contact";
import Cart from "./components/pages/cart/Cart";
import "./App.css";

const App = () => {
  const [cart, setCart] = useState([]); // Initialize cart state

  // Function to add product to cart
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, qty: item.qty + product.qty }
            : item
        );
      }
      return [...prevCart, product];
    });
  };

  // Function to remove product from cart
  const removeFromCart = (productId) => {
    setCart((prevCart) =>
      prevCart.filter((product) => product.id !== productId)
    );
  };
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route
              path="/products"
              element={<Products addToCart={addToCart} />}
            />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/cart"
              element={<Cart cart={cart} removeFromCart={removeFromCart} />}
            />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};


export default App;
