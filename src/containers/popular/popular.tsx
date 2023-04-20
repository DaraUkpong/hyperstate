/* eslint-disable @next/next/no-img-element */
import React, { Component } from "react";

import styles from "./popular.module.css";
import Listingcard from "@/components/listingcard/listingcard";
import Clients from "@/components/clientele/client";

const Popular = () => {
  return (
    <div className={styles.popularcontainer}>
      <div className={styles.popularbox}>
        <div className={styles.titlerow}>
          <span>Popular Residences</span>
          <p>
            Explore All <img src="/arrow.svg" alt="" />
          </p>
        </div>
        <div className={styles.list}>
          <div className={styles.listingsrow}>
            <Listingcard
              image="/listing1.svg"
              price="59,345"
              location="Home in downtown, Los Angeles"
            />
            <Listingcard
              image="/listing2.svg"
              price="79,345"
              location="Modern loft in San Francisco, CA"
            />
            <Listingcard
              image="/listing3.svg"
              price="53,345"
              location="Apartment Downtown, San Diego"
            />
          </div>
        </div>

        <div className={styles.quotecont}>
          <div className={styles.founder}>
            <span>John Doe</span>
            <p>Founder Hyperstate</p>
          </div>
          <div className={styles.founderquote}>
            <img src="/quoteicon.svg" alt="" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit ut
              aliquam, purus sit amet luctus venenatis,
              <br /> lectus magna fringilla urna, porttitor.
            </p>
          </div>
        </div>
      </div>
      <Clients />
    </div>
  );
};

export default Popular;
