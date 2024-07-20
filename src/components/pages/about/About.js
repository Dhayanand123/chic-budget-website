/* jshint esversion:6 */
/*
import React from "react";
import styles from "./About.module.css";
// Correct relative path to the image
import qualityIcon from "../../images/quality.png"; // Placeholder for icons
import sustainabilityIcon from "../../images/sustainability.png";
import communityIcon from "../../images/communtiy.jpg";

const About = () => (
  <div className={styles.about}>
    <div className={styles.overlay}></div>
    <div className={styles.content}>
      <h2 className={styles.heading}>About Organic Store</h2>
      <p className={styles.paragraph}>
        Discover our story and the values that drive us.
      </p>

      <section className={styles.section}>
        <h3 className={styles.sectionHeading}>Our Mission</h3>
        <p className={styles.sectionParagraph}>
          At Organic Store, our mission is to promote healthy living by
          providing high-quality organic products. We are committed to
          sustainability, supporting local farmers, and offering our customers
          the best in organic foods.
        </p>
      </section>

      <section className={styles.section}>
        <h3 className={styles.sectionHeading}>Our Vision</h3>
        <p className={styles.sectionParagraph}>
          We envision a world where everyone has access to nutritious and
          sustainable food. We strive to be a leading provider of organic
          products and to inspire our community to live healthier lives.
        </p>
      </section>

      <section className={styles.valuesSection}>
        <h3 className={styles.sectionHeading}>Our Values</h3>
        <div className={styles.valuesContainer}>
          <div className={styles.valueItem}>
            <img src={qualityIcon} alt="Quality" className={styles.valueIcon} />
            <p>
              <strong>Quality:</strong> We ensure the highest standards for our
              products.
            </p>
          </div>
          <div className={styles.valueItem}>
            <img
              src={sustainabilityIcon}
              alt="Sustainability"
              className={styles.valueIcon}
            />
            <p>
              <strong>Sustainability:</strong> We support environmentally
              friendly practices.
            </p>
          </div>
          <div className={styles.valueItem}>
            <img
              src={communityIcon}
              alt="Community"
              className={styles.valueIcon}
            />
            <p>
              <strong>Community:</strong> We are dedicated to supporting and
              engaging with our local community.
            </p>
          </div>
        </div>
      </section>
    </div>
  </div>
);

export default About;
*/
/* jshint esversion:6 */
import React from "react";
import styles from "./About.module.css";
import qualityIcon from "../../images/quality.png";
import sustainabilityIcon from "../../images/sustainability.png";
import communityIcon from "../../images/communtiy.png";

const About = () => (
  <div className={styles.about}>
    <div className={styles.overlay}></div>
    <div className={styles.content}>
      <h2 className={styles.heading}>About ChicBudget</h2>
      <p className={styles.paragraph}>
        Discover our story and the values that drive us.
      </p>

      <section className={styles.section}>
        <h3 className={styles.sectionHeading}>Our Mission</h3>
        <p className={styles.sectionParagraph}>
        At ChicBudget, our mission is to offer stylish and affordable jewellery, trendy t-shirts, and fun toys. We are committed to providing high-quality products that bring joy and satisfaction to our customers.
        </p>
      </section>

      <section className={styles.section}>
        <h3 className={styles.sectionHeading}>Our Vision</h3>
        <p className={styles.sectionParagraph}>
        We envision a world where everyone has access to fashionable accessories, comfortable apparel, and engaging toys. We strive to be a leading provider in these categories, inspiring our community with our unique and affordable offerings. 
        </p>
      </section>

      {/* <section className={styles.valuesSection}>
        <h3 className={styles.sectionHeading}>Our Values</h3>
        <div className={styles.valuesContainer}>
          <div className={styles.valueItem}>
            <img src={qualityIcon} alt="Quality" className={styles.valueIcon} />
            <p>
              <strong>Quality:</strong> We ensure the highest standards for our
              products.
            </p>
          </div>
          <div className={styles.valueItem}>
            <img
              src={sustainabilityIcon}
              alt="Sustainability"
              className={styles.valueIcon}
            />
            <p>
              <strong>Sustainability:</strong> We support environmentally
              friendly practices.
            </p>
          </div>
          <div className={styles.valueItem}>
            <img
              src={communityIcon}
              alt="Community"
              className={styles.valueIcon}
            />
            <p>
              <strong>Community:</strong> We are dedicated to supporting and
              engaging with our local community.
            </p>
          </div>
        </div>
      </section> */}

      <section className={styles.section}>
        <h3 className={styles.sectionHeading}>Our Commitment to Quality</h3>
        <p className={styles.sectionParagraph}>
        ChicBudget is committed to providing high-quality products that our customers can trust. From our elegant jewellery pieces to our comfortable t-shirts and engaging toys, we ensure that every item meets our stringent quality standards.
        </p>
      </section>

      <section className={styles.section}>
        <h3 className={styles.sectionHeading}>Join Our Movement</h3>
        <p className={styles.sectionParagraph}>
        Join us in our mission to bring affordable luxury and fun to everyone. Whether you're a fashion enthusiast, a parent looking for the perfect toy, or someone who loves stylish apparel, we welcome you to be a part of our ChicBudget community
        </p>
      </section>
    </div>
  </div>
);

export default About;
