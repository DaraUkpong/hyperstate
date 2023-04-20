/* eslint-disable @next/next/no-img-element */
import React, { useState, useRef, SetStateAction } from "react";

import styles from "./accordion.module.css";

type Props = {
  title: string;
  content: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
};

const Accordion = ({ title, content, onClick }: Props) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
    onClick;
  };
  return (
    <div className={styles.accordionitem}>
      <div className={styles.accordiontitle} onClick={handleClick}>
        <div className={styles.title}>
          <img src="/tick.svg" alt="" />
          <span>{title}</span>
        </div>
        <div>
          {isActive ? (
            <img src="/valueclose.svg" alt="close" />
          ) : (
            <img src="/valueopen.svg" alt="close" />
          )}
        </div>
      </div>

      {isActive && <div className={styles.accordioncontent}>{content}</div>}
    </div>
  );
};

export default Accordion;
