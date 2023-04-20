/* eslint-disable @next/next/no-img-element */
import React, { useRef } from "react";

import styles from "./value.module.css";
import Accordion from "@/components/accordion/accordion";
import Blogpost from "@/components/blogpost/blogpost";

const Value = () => {
  return (
    <div className={styles.valuecontainer}>
      <span>Value We Give To You</span>

      <div className={styles.valuebox}>
        <img src="/valueimg.svg" alt="" />
        <div className={styles.valuetext}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna.
          </p>
          <Accordion
            title="Best Interest Rates On The Market"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing 
            elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor"
          />
          <Accordion
            title="Prevent Unstable Prices"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing 
            elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor"
          />
          <Accordion
            title="Best Price on The Market"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing 
            elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor"
          />
          <Accordion
            title="Security Of Your Data"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing 
            elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor"
          />
        </div>
      </div>
    </div>
  );
};

export default Value;
