import { MdOutlineMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { useState } from 'react';
import Button from "../Button/Button";
import styles from "./Contact.module.css";

const ContactForm = () => {

  

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  const onCallSubmit = () => {
    console.log("I am on Call")
  }

  const onSubmit = (event) => {
    event.preventDefault();

    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[2].value);
  };

  return (
    <section className={styles.container}>
      <div className={`${styles.contact_form}`}>
        <div className={styles.top_btn}>
          <Button text="VIA SUPPORT CHAT" icon={<MdOutlineMessage />} />
          <Button onClick={onCallSubmit} text="VIA CALL" icon={<FaPhoneAlt />} />
        </div>
        <Button
          isOutline={true}
          text="VIA EMAIL FORM"
          icon={<MdOutlineMailOutline />}
        />
        <form onSubmit={onSubmit}>
          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="text">Text</label>
            <textarea name="text" rows="8" />
          </div>
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button
          isOutline={false}
          text="SUBMIT"
        />
          </div>
          <div>
            { name + " " + email + " " + text + " "}
          </div>

        </form>
      </div>
      <div className={`${styles.contatc_image}`}>
        <img src="/public/images/contact.svg" />
      </div>
    </section>
  );
};

export default ContactForm;
