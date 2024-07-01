'use client';

import styles from './Reservation.module.css';
import Image from 'next/image';

const Reservation = () => {
  return (
    <div className={styles.page}>
      <div className={styles.banner}>
        <Image 
          src="/planReservation.jpg" 
          alt="Reservation Banner" 
          layout="fill" 
          objectFit="cover"
          priority={true}
        />
      </div>
      <div className={styles.overlay}>
        <div className={styles.container}>
          <h1 className={styles.title}>Réservation</h1>
          <form className={styles.form}>
            <label className={styles.label} htmlFor="name">Nom :</label>
            <input className={styles.input} type="text" id="name" name="name" placeholder="Nom" />
            
            <label className={styles.label} htmlFor="email">Email :</label>
            <input className={styles.input} type="email" id="email" name="email" placeholder="Email" />

            <label className={styles.label} htmlFor="date">Date de visite :</label>
            <input className={styles.input} type="date" id="date" name="date" placeholder="aaaa-mm-jj" />
            
            <button className={styles.button} type="submit">Réserver</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Reservation;
