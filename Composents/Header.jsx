import styles from './Header.module.css';
import Image from 'next/image';
import MenuNav from './MenuNav';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.title}>
        <Image src="/Logo.png" alt="Guide" width={80} height={80} />
      </div>
      <MenuNav />
    </header>
  );
}
