/* eslint-disable @next/next/no-img-element */
import React, { Component } from "react";

import styles from "./listingcard.module.css";

type Props = {
  image: string;
  location: string;
  price: string;
};

const Listingcard = ({ image, location, price }: Props) => {
  return (
    <div className={styles.cardbox}>
      <img src={image} alt="Resident Image" />
      <div className={styles.carddetails}>
        <span>${price}</span>
        <span>{location}</span>
        <hr />
        <div className={styles.cardstatsrow}>
          <div className={styles.cardstat}>
            <img src="/sqfticon.svg" alt="" /> <span>2500 sqft</span>
          </div>
          <div className={styles.cardstat}>
            <img src="/bedicon.svg" alt="" /> <span>3</span>
          </div>
          <div className={styles.cardstat}>
            <img src="/bathicon.svg" alt="" /> <span>2</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Listingcard;
