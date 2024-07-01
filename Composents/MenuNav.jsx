import styles from './MenuNav.module.css';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function MenuNav() {
  const router = useRouter();
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
        <li><a href="#" onClick={() => { router.push('/'); setIsOpen(false); }}>Accueil</a></li>
        <li><a href="#" onClick={() => { router.push('/about'); setIsOpen(false); }}>About</a></li>
        <li><a href="#" onClick={() => { router.push('/reservation'); setIsOpen(false); }}>Réservation</a></li>
        <li><a href="#" onClick={() => { router.push('/contact'); setIsOpen(false); }}>Contact</a></li>
        <li><a href="#" onClick={() => { router.push('/connexion'); setIsOpen(false); }}>Connexion</a></li>
      </ul>
    </nav>
  );
}
