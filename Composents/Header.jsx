import styles from './Header.module.css';
import Image from 'next/image';
import MenuNav from './MenuNav';

export default function Header({ setPage }) {
  const handleLogoClick = () => {
    window.location.href = '/';
  };

  return (
    <header className={styles.header}>
      <div className={styles.title} onClick={handleLogoClick}>
        <div className={styles.Lelogo}>
          <Image src="/Logo.png" alt="Guide" width={80} height={80} />
        </div>
      </div>
      <MenuNav setPage={setPage} />
    </header>
  );
}
