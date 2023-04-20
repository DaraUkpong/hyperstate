import React, { Component } from "react";

import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.nav}>
      <span>HyperState</span>
      <div className={styles.navlinks}>
        <ul>
          <li>Property</li>
          <li>Services</li>
          <li>Product</li>
          <li>About Us</li>
        </ul>
        <button>Contact</button>
      </div>
    </div>
  );
};

export default Navbar;
