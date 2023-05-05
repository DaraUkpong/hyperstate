import React, { useState } from "react";

import styles from "./navbar.module.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={styles.nav}>
      <span>HyperState</span>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={styles.menubtn}
        aria-controls="navbar-solid-bg"
        aria-expanded="false"
      >
        <span className="sr-only"></span>
        {!isOpen ? (
          <svg
            className="block h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        ) : (
          <svg
            className="block h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        )}
      </button>
      <div className={styles.navlinks}>
        <ul>
          <li>Property</li>
          <li>Services</li>
          <li>Product</li>
          <li>About Us</li>
        </ul>
        <button className={styles.ctabutton}>Contact</button>
      </div>

      {isOpen && (
        <div className={styles.mobilenavlinks}>
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className={styles.menubtn}
            aria-controls="navbar-solid-bg"
            aria-expanded="false"
          >
            <span className="sr-only"></span>
            {!isOpen ? (
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            ) : (
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </button>
          <ul>
            <li>Property</li>
            <li>Services</li>
            <li>Product</li>
            <li>About Us</li>
          </ul>
          <button className={styles.ctabutton}>Contact</button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
