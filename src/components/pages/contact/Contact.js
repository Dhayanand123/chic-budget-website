/*import React from "react";
import styles from "./Contact.module.css"; // Import CSS module for styling

const Contact = () => {
  return (
    <div className={styles.contact}>
      <div className={styles.contactForm}>
        <h2 className={styles.heading}>Contact Us</h2>
        <form>
          <div className={styles.formGroup}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
          <button type="submit" className={styles.submitButton}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
*/
import React from "react";
import styles from "./Contact.module.css"; // Import CSS module for styling

const Contact = () => {
  return (
    <div className={styles.contact}>
      <div className={styles.contactForm}>
        <h2 className={styles.heading}>Contact Us</h2>
        <form>
          <div className={styles.formGroup}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
          <button type="submit" className={styles.submitButton}>
            Submit
          </button>
        </form>
      </div>

      <div className={styles.contactInfo}>
        <h2 className={styles.heading}>Our Location</h2>
        <p className={styles.address}>
        jewellery shop
          <br />
           Near Reliance Mall , 5 roads Salem
          <br />
           Salem , TamilNadu (636305)
          <br />
          India
        </p>

        <h2 className={styles.heading}>Contact Information</h2>
        <ul className={styles.infoList}>
          <li>
            <strong>Phone:</strong> +91 9876543210
          </li>
          <li>
            <strong>Email:</strong> info@ChicBudget.com
          </li>
        </ul>

      </div>
    </div>
  );
};

export default Contact;
