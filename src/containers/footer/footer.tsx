/* eslint-disable @next/next/no-img-element */
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.cta}>
        <span>Ready to get started?</span>
        <p>To join the worldwide community</p>

        <div className={styles.herosearch}>
          <input type="text" placeholder="Enter your email" />
          <button>Join Now</button>
        </div>
      </div>

      <div className={styles.links}>
        <div className={styles.linkstext}>
          <span>Hyperstate</span>
          <ul>
            <a href="#">
              <li>Home</li>
            </a>
            <a href="#">
              <li>About</li>
            </a>
            <a href="#">
              <li>Service</li>
            </a>
            <a href="#">
              <li>Portfolio</li>
            </a>
            <a href="#">
              <li>Blog</li>
            </a>
            <a href="#">
              <li>Contact</li>
            </a>
          </ul>
        </div>

        <p>Copyright Dara ukpong. All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
