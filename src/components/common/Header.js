/* jshint esversion:6 */
/*
import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => (
  <header className={styles.header}>
    <h1 className={styles.title}>Organic Store</h1>
    <nav>
      <ul className={styles.navList}>
        <li>
          <Link to="/" className={styles.navItem}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className={styles.navItem}>
            About
          </Link>
        </li>
        <li>
          <Link to="/products" className={styles.navItem}>
            Products
          </Link>
        </li>
        <li>
          <Link to="/contact" className={styles.navItem}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
*/

/* jshint esversion:6 */
/*
import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => (
  <header className={styles.header}>
    <h1 className={styles.title}>Organic Store</h1>
    <nav>
      <ul className={styles.navList}>
        <li>
          <Link to="/" className={styles.navItem}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className={styles.navItem}>
            About
          </Link>
        </li>
        <li>
          <Link to="/products" className={styles.navItem}>
            Products
          </Link>
        </li>
        <li>
          <Link to="/contact" className={styles.navItem}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
*/
/* jshint esversion:6 */

import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import styles from "./Header.module.css";
import Logo from "../images/logo7.svg";
// import Login from "../pages/login/Login";
//import Cart from "../pages/cart/Cart";
const Header = () => {
  const [isMinimized, setIsMinimized] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("user");
    setIsLoggedIn(!!user); // Set isLoggedIn to true if user exists
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    navigate("/login");
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        // Adjust this value as needed
        setIsMinimized(true);
      } else {
        setIsMinimized(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`${styles.header} ${isMinimized ? styles.minimized : ""}`}
    >
      <h1 className={styles.title}>ChicBudget</h1>
      <nav>
        <ul className={styles.navList}>
          <div className={styles.logoContainer}>
            <img src={Logo} alt="Organic Store Logo" className={styles.logo} />
          </div>
          <li>
            <Link to="/" className={styles.navItem}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className={styles.navItem}>
              About
            </Link>
          </li>
          <li>
            <Link to="/products" className={styles.navItem}>
              Products
            </Link>
          </li>
          <li>
            <Link to="/contact" className={styles.navItem}>
              Contact
            </Link>
          </li>
          <li>
            <Link to="/cart" className={styles.navItem2}>
              Cart
            </Link>
          </li>
          {/* <li>
            <Link to="/login" className={styles.navItem1}>
              Login
            </Link>
          </li> */}
          <li>
            {isLoggedIn ? (
              <button onClick={handleLogout} className={styles.navItem1}>
                Logout
              </button>
            ) : (
              <Link to="/login" id="login" className={styles.navItem1}>
                Login
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
