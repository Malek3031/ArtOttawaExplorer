import styles from './MenuNav.module.css';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function MenuNav({ setPage, menuItems }) {
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
        <li><a href="#" onClick={() => { router.push('/'); setIsOpen(false); }}>{menuItems.accueil}</a></li>
        <li><a href="#" onClick={() => { router.push('/about'); setIsOpen(false); }}>{menuItems.about}</a></li>
        <li><a href="#" onClick={() => { router.push('/reservation'); setIsOpen(false); }}>{menuItems.reservation}</a></li>
        <li><a href="#" onClick={() => { router.push('/contact'); setIsOpen(false); }}>{menuItems.contact}</a></li>
        <li><a href="#" onClick={() => { router.push('/connexion'); setIsOpen(false); }}>{menuItems.connexion}</a></li>
      </ul>
    </nav>
  );
}
