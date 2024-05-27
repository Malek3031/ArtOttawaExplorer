import styles from './Accueil.module.css';
import Image from 'next/image';

export default function Accueil() {
  return (
    <div className={styles.accueil}>
      <div className={styles.Baniere}>
        <Image 
          src="/banner.jpg" 
          alt="Banner" 
          layout="responsive" 
          width={1200} 
          height={300} 
        />
        <h1 className={styles.NomDuSite}>
          ArtOttawa
        </h1>
      </div>
      <div className={styles.introduction}>
        <h2>Bienvenue à ArtOttawa</h2>
        <p>Découvrez l'art et la culture d'Ottawa, la capitale du Canada. Explorez notre collection d'art unique et réservez des visites guidées pour une expérience inoubliable.</p>
      </div>
    </div>
  );
}
