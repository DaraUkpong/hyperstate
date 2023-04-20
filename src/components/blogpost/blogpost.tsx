/* eslint-disable @next/next/no-img-element */
import React, { Component } from "react";

import styles from "./blogpost.module.css";
import { types } from "util";

type Props = {
  date: string;
  title: string;
  image: string;
};

const Blogpost = ({ date, title, image }: Props) => {
  return (
    <div className={styles.blogbox}>
      <img src={image} alt="Resident Image" />
      <div className={styles.blogdetails}>
        <p>{date}</p>
        <hr />
        <span>{title}</span>
        <button className={styles.button}>Read More</button>
      </div>
    </div>
  );
};

export default Blogpost;
