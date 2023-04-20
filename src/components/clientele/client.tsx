/* eslint-disable @next/next/no-img-element */
import React, { Component } from "react";
import Marquee from "react-fast-marquee";
import styles from "./client.module.css";

const Clients = () => {
  return (
    <div className={styles.clientsrow}>
      <Marquee pauseOnHover gradient={false} speed={50}>
        <img
          className={styles.clientimg}
          src="./Paypal.svg"
          alt="Paypal Icon"
        />
        <img className={styles.clientimg} src="/webflow.svg" alt="" />
        <img className={styles.clientimg} src="/google.svg" alt="" />
        <img className={styles.clientimg} src="/amazon.svg" alt="" />
        <img className={styles.clientimg} src="/adobe.svg" alt="" />
        <img
          className={styles.clientimg}
          src="./Paypal.svg"
          alt="Paypal Icon"
        />
        <img className={styles.clientimg} src="/webflow.svg" alt="" />
        <img className={styles.clientimg} src="/google.svg" alt="" />
        <img className={styles.clientimg} src="/amazon.svg" alt="" />
        <img className={styles.clientimg} src="/adobe.svg" alt="" />
      </Marquee>
    </div>
  );
};

export default Clients;
