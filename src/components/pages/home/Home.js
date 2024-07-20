/* jshint esversion:6  */
/*
import React from "react";
import styles from "./Home.module.css";
// Correct relative path to the image

const Home = () => (
  <div className={styles.home}>
    <div className={styles.overlay}></div>
    <div className={styles.content}>
      <h2 className={styles.heading}>Welcome to Organic Store</h2>
      <p className={styles.paragraph}>
        Your one-stop shop for organic products.
      </p>

      <section className={styles.section}>
        <h3 className={styles.sectionHeading}>Why Choose Us?</h3>
        <p className={styles.sectionParagraph}>
          At Organic Store, we believe in providing the best quality organic
          products. Our store offers a wide range of organic foods and products
          that are not only healthy but also environmentally friendly.
        </p>
      </section>

      <section className={styles.section}>
        <h3 className={styles.sectionHeading}>Our Products</h3>
        <div className={styles.productGrid}>
          <div className={styles.productCard}>
            <h4>Organic Vegetables</h4>
            <p>Fresh and locally sourced vegetables.</p>
          </div>
          <div className={styles.productCard}>
            <h4>Organic Fruits</h4>
            <p>Delicious and juicy organic fruits.</p>
          </div>
          <div className={styles.productCard}>
            <h4>Organic Dairy</h4>
            <p>Pure and fresh organic dairy products.</p>
          </div>
        </div>
      </section>
    </div>
  </div>
);

export default Home;
*/

/* jshint esversion:6  */
import React from "react";
import styles from "./Home.module.css";
import ChatBot from 'react-simple-chatbot';

const Home = () => (
  <div className={styles.home}>
    <div className={styles.overlay}></div>
    <div className={styles.content}>
      <h2 className={styles.heading}> Welcome to ChicBudget Jewelry Finder</h2>
      <p className={styles.paragraph}></p>
      <section className={styles.section}>
        <h3 className={styles.sectionHeading}>Discover affordable accessories and trendy t-shirts</h3>
        <marquee><strong>🎤Offer Price For Diwali 50%🎤</strong></marquee>
        <img
          src="https://img.freepik.com/free-vector/beautiful-black-gold-diwali-festival-sale-banner_1017-21462.jpg?size=626&ext=jpg&ga=GA1.1.668646627.1721192865&semt=ais_user"
          alt="Shop Now 50% Offer"
          className={styles.offerImage}
        />
        <p className={styles.sectionParagraph}>
          At ChicBudget, we believe in offering stylish and affordable jewellery and apparel. Our collection features a wide range of accessories and T-shirts that cater to every taste and occasion.
        </p>
      </section>

      <section className={styles.section}>
        <h3 className={styles.sectionHeading}>Our Products</h3>
        <div className={styles.productGrid}>
          <div className={styles.productCard}>
            <img
              src="https://th.bing.com/th?id=OIP.KYMT6EZhlBWQty_9zX3ZfAHaFj&w=288&h=216&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
              alt="Necklaces"
              className={styles.productImage}
            />
            <h4>Necklaces</h4>
            <p>Elegant and trendy necklaces for every occasion.</p>
          </div>
          <div className={styles.productCard}>
            <img
              src="https://th.bing.com/th?id=OIP.op_M74abaLaNzBV7nugbuQHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
              alt="Bracelets"
              className={styles.productImage}
            />
            <h4>Bracelets</h4>
            <p>Stylish bracelets to complement your look.</p>
          </div>
          <div className={styles.productCard}>
            <img
              src="https://th.bing.com/th?id=OIP.t8pw1vV3zmU992qvMM9UXgHaFj&w=288&h=216&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
              alt="Rings"
              className={styles.productImage}
            />
            <h4>Rings</h4>
            <p>Beautiful rings that make a statement.</p>
          </div>
          <div className={styles.productCard}>
            <img
              src="https://th.bing.com/th?id=OIP.w19qwoa1-Mdz0-_hF7b6GQHaFj&w=288&h=216&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
              alt="Earrings"
              className={styles.productImage}
            />
            <h4>Earrings</h4>
            <p>Chic earrings for a touch of elegance.</p>
          </div>
          <div className={styles.productCard}>
            <img
              src="https://th.bing.com/th/id/OIP.znc_H1kIqYm0hv_BlMcDqwHaIL?w=148&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
              alt="T-Shirts"
              className={styles.productImage}
            />
            <h4>T-Shirts</h4>
            <p>Comfortable and trendy t-shirts for everyday wear.</p>
          </div>
          <div className={styles.productCard}>
            <img
              src="https://th.bing.com/th?id=OIP.SJ0x1Yg2iM8qY6B-WCSBeAHaE5&w=307&h=203&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
              alt="Custom Designs"
              className={styles.productImage}
            />
            <h4>Toys Collection</h4>
            <p>Shop from the latest collection of India</p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h3 className={styles.sectionHeading}>Benefits of Shopping with Us</h3>
        <ul className={styles.benefitsList}>
          <li>Affordable prices without compromising on style</li>
          <li>High-quality materials and craftsmanship</li>
          <li>Wide variety of designs to suit all tastes</li>
          <li>Excellent customer service and support</li>
          <li>Fast and reliable shipping</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h3 className={styles.sectionHeading}>Subscribe to Our Newsletter</h3>
        <form className={styles.newsletterForm}>
          <input
            type="email"
            placeholder="Enter your email"
            className={styles.newsletterInput}
          />
          <button type="submit" className={styles.newsletterButton}>
            Subscribe
          </button>
        </form>
      </section>
    </div>
  </div>
);

const App = () => (
  <div>
    <Home />
    <ChatBot
      steps={[
        {
          id: '1',
          message: 'What is your name?',
          trigger: '2',
        },
        {
          id: '2',
          user: true,
          trigger: '3',
        },
        {
          id: '3',
          message: 'Hi {previousValue}, nice to meet you!',
          trigger: '4',
        },
        {
          id: '4',
          message: 'What can I help you with?',
          trigger: '5',
        },
        {
          id: '5',
          options: [
            { value: 'jewelry', label: 'Tell me about jewelry', trigger: 'jewelry' },
            { value: 'tshirts', label: 'Tell me about t-shirts', trigger: 'tshirts' },
            { value: 'offers', label: 'Tell me about current offers', trigger: 'offers' },
          ],
        },
        {
          id: 'jewelry',
          message: 'We offer a wide range of elegant and trendy jewelry including necklaces, bracelets, rings, and earrings.',
          trigger: 'moreHelp',
        },
        {
          id: 'tshirts',
          message: 'Our collection of t-shirts includes comfortable and trendy designs for everyday wear.',
          trigger: 'moreHelp',
        },
        {
          id: 'offers',
          message: 'We currently have a Diwali offer with 50% off on selected items!',
          trigger: 'moreHelp',
        },
        {
          id: 'moreHelp',
          message: 'Is there anything else I can help you with?',
          trigger: '5',
        },
      ]}
      floating={true}
    />
  </div>
);

export default App;
