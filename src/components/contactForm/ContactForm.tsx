import React from "react";
import styles from "./styles.module.scss";

const ContactForm = () => {
  return (
    <form className={styles.form}>
      <h1 className={styles["form-title"]}>Contact us</h1>
      <div>
        <div className={styles["form-section"]}>
          <div className={styles["form-row"]}>
            <p className={styles["form-label"]}>Name</p>
            <input type="text" placeholder="Enter user name" />
          </div>
          <div className={styles["form-row"]}>
            <p className={styles["form-label"]}>Email</p>
            <input type="text" placeholder="Enter user email" />
          </div>
        </div>
        <div className={styles["form-row"]}>
          <p className={styles["form-label"]}>Message</p>
          <textarea placeholder="Enter your message" />
        </div>
      </div>
      <button>Send</button>
    </form>
  );
};

export default ContactForm;
