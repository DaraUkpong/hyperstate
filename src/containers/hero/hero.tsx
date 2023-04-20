/* eslint-disable @next/next/no-img-element */
import React, { Component } from "react";

import styles from "./hero.module.css";
import Navbar from "@/components/navbar/navbar";

type Props = {};

const Hero = () => {
  return (
    <div className={styles.herocontainer}>
      <Navbar />
      <div className={styles.herobox}>
        <div className={styles.herotext}>
          <h1>
            The Best Place <br /> To Find Your <br /> Dream House
          </h1>
          <span>
            We Are A Real Estate Agency That Will help You In Designing A Modern
            And Minimalist Dream House.Lets Discuss!
          </span>
          <div className={styles.herosearch}>
            <img src="/ci_location.svg" alt="" />
            <input type="text" placeholder="Search by location..." />
            <button>Search Now</button>
          </div>
          <div className={styles.herostatsrow}>
            <div className={styles.herostat}>
              <span>1200</span>
              <p>Premium Product</p>
            </div>
            <div className={styles.herostat}>
              <span>4500</span>
              <p>Happy Customers</p>
            </div>
            <div className={styles.herostat}>
              <span>240</span>
              <p>Awards Won</p>
            </div>
          </div>
        </div>
        <div className={styles.heroimg}>
          <img src="/heroimg.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
