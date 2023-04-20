import Blogpost from "@/components/blogpost/blogpost";
import styles from "./blogs.module.css";

const Blogspage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.blogbox}>
        <span>Our Blogs</span>
        <div className={styles.blogrow}>
          <Blogpost
            image="/blogpic1.svg"
            date="28 February 2022"
            title="The Power Of Real Estate To Create Wealth"
          />
          <Blogpost
            image="/blogpic1.svg"
            date="28 February 2022"
            title="The Power Of Real Estate To Create Wealth"
          />
          <Blogpost
            image="/blogpic1.svg"
            date="28 February 2022"
            title="The Power Of Real Estate To Create Wealth"
          />
        </div>
      </div>
    </div>
  );
};

export default Blogspage;
