import styles from './Footer.module.css';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.copy}>
          &copy; ArtOttawa 2024
        </div>
        
        <div className={styles.socials}>
          <a href="#" className={styles.social}><FaFacebook /></a>
          <a href="#" className={styles.social}><FaTwitter /></a>
          <a href="#" className={styles.social}><FaInstagram /></a>
        </div>
      </div>
    </footer>
  );
}
