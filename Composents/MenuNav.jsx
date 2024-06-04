import styles from './MenuNav.module.css';
import { useState } from 'react';

export default function MenuNav({ setPage }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.menuToggle} onClick={toggleMenu}>
        ☰
      </div>
      <ul className={`${styles.menu} ${isOpen ? styles.menuOpen : ''}`}>
        <li><a href="#" onClick={() => { setPage('accueil'); setIsOpen(false); }}>Accueil</a></li>
        <li><a href="#" onClick={() => { setPage('about'); setIsOpen(false); }}>About</a></li>
        <li><a href="#" onClick={() => { setPage('reservation'); setIsOpen(false); }}>Réservation</a></li>
        <li><a href="#" onClick={() => { setPage('contact'); setIsOpen(false); }}>Contact</a></li>
        <li><a href="#" onClick={() => { setPage('connexion'); setIsOpen(false); }}>Connexion</a></li>
      </ul>
    </nav>
  );
}
