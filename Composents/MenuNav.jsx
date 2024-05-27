import styles from './MenuNav.module.css';
import { useRouter } from 'next/navigation';

export default function MenuNav() {
  const router = useRouter();

  return (
    <nav className={styles.nav}>
      <ul>
        <li><a href="#" onClick={() => router.push('/')}>Accueil</a></li>
        <li><a href="#" onClick={() => router.push('/reservation')}>Réservation</a></li>
        <li><a href="#" onClick={() => router.push('/contact')}>Contact</a></li>
        <li><a href="#" onClick={() => router.push('/connexion')}>Connexion</a></li>
      </ul>
    </nav>
  );
}
