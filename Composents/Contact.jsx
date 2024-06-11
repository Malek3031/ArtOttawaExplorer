import styles from './Contact.module.css';
import Image from 'next/image';

const Contact = () => {
  return (
    <div className={styles.page}>
      <div className={styles.banner}>
        <Image 
          src="/planContact.jpg" 
          alt="Contact Banner" 
          layout="fill" 
          objectFit="cover"
        />
      </div>
      <div className={styles.overlay}>
        <div className={styles.container}>
          <div className={styles.contactDetails}>
            <div className={styles.contactInfo}>
              <h2>Apllez Nous</h2>
              <p>+1 (891)-979-0578</p>
            </div>
            <div className={styles.contactInfo}>
              <h2>Localisation</h2>
              <p>801 Aviation Pkwy, Ottawa, ON K1K 4R3</p>
            </div>
          </div>
          <form className={styles.form}>
            <label className={styles.label} htmlFor="name">Nom :</label>
            <input className={styles.input} type="text" id="name" name="name" placeholder="Nom" />
            
            <label className={styles.label} htmlFor="email">Email :</label>
            <input className={styles.input} type="email" id="email" name="email" placeholder="Email" />

            <label className={styles.label} htmlFor="address">Adresse :</label>
            <input className={styles.input} type="text" id="address" name="address" placeholder="Adresse" />

            <label className={styles.label} htmlFor="message">Message :</label>
            <textarea className={styles.textarea} id="message" name="message" placeholder="Votre message"></textarea>
            
            <button className={styles.button} type="submit">Soumettre</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
