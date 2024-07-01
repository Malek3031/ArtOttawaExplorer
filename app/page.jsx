'use client';
import { usePathname } from 'next/navigation';
import Accueil from '../Composents/Accueil';
import About from '../Composents/About';
import Reservation from '../Composents/Reservation';
import Contact from '../Composents/Contact';
import Connexion from '../Composents/Connexion';
import styles from './page.module.css';

export default function Page() {
  const pathname = usePathname();

  return (
    <div className={styles.page}>
      {pathname === '/' && <Accueil />}
      {pathname === '/about' && <About />}
      {pathname === '/reservation' && <Reservation />}
      {pathname === '/contact' && <Contact />}
      {pathname === '/connexion' && <Connexion />}
    </div>
  );
}
