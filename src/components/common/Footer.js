/* jshint esversion:6 */
import React from "react";
import { useState, useEffect } from "react";

import styles from "./Footer.module.css";



const Footer = () => {
  const [isMax, setIsMax] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 50 // Adjust this value as needed
      ) {
        // Adjust this value as needed
        setIsMax(true);
      } else {
        setIsMax(false);
      }
    };
    

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <footer className={`${styles.footer} ${isMax ? styles.max : ""}`}>
      <p>
        &copy; {new Date().getFullYear()} ChicBudget.com. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
