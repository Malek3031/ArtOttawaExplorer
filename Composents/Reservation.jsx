import styles from './Reservation.module.css';

export default function Reservation() {
  return (
    <div className={styles.reservation}>
      <h1>Réservation</h1>
      <form className={styles.form}>
        <div className={styles.formGroup}>
          <div className={styles.inputGroup}>
            <input type="text" id="name" className={styles.inputGroupInput} required />
            <label htmlFor="name" className={styles.inputGroupLabel}>Nom:</label>
          </div>
        </div>
        <div className={styles.formGroup}>
          <div className={styles.inputGroup}>
            <input type="email" id="email" className={styles.inputGroupInput} required />
            <label htmlFor="email" className={styles.inputGroupLabel}>Email:</label>
          </div>
        </div>
        <div className={styles.formGroup}>
          <div className={styles.inputGroupNoAnimation}>
            <input type="date" id="date" className={styles.inputGroupInput} required />
            <label htmlFor="date" className={styles.inputGroupLabel}>Date de visite:</label>
          </div>
        </div>
        <button type="submit" className={styles.submitButton}>Réserver</button>
      </form>
    </div>
  );
}
