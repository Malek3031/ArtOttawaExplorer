import styles from './Header.module.css';
import Image from 'next/image';
import MenuNav from './MenuNav';
import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import { LanguageContext } from './LanguageContext';

export default function Header({ setPage }) {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { language, toggleLanguage } = useContext(LanguageContext);

  const handleLogoClick = () => {
    window.location.href = '/';
  };

  const menuItems = {
    accueil: language === 'fr' ? 'Accueil' : 'Home',
    about: language === 'fr' ? 'À propos' : 'About',
    reservation: language === 'fr' ? 'Réservation' : 'Reservation',
    contact: language === 'fr' ? 'Contact' : 'Contact',
    connexion: language === 'fr' ? 'Connexion' : 'Login'
  };

  return (
    <header className={styles.header}>
      <div className={styles.leftSection}>
        <div className={styles.title} onClick={handleLogoClick}>
          <div className={styles.Lelogo}>
            <Image src="/Logo.png" alt="Guide" width={80} height={80} />
          </div>
        </div>
        <div className={styles.buttons}>
          <div className={styles.themeToggle} onClick={toggleTheme}>
            <div className={styles.toggleCircle} style={{ transform: theme === 'light' ? 'translateX(0)' : 'translateX(100%)' }}>
              <Image src={theme === 'light' ? '/sun.png' : '/moon.png'} alt="theme icon" width={24} height={24} />
            </div>
          </div>
          <button onClick={toggleLanguage} className={styles.languageButton}>
            {language === 'fr' ? 'English' : 'Français'}
          </button>
        </div>
      </div>
      <MenuNav setPage={setPage} menuItems={menuItems} />
    </header>
  );
}
