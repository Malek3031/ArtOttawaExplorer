import styles from './Accueil.module.css';
import Image from 'next/image';

const Accueil = () => {
  return (
    <div className={styles.page}>
      <div className={styles.banner}>
        <Image 
          src="/banner.jpg" 
          alt="Accueil Banner" 
          layout="fill" 
          objectFit="cover"
        />
      </div>
      <div className={styles.overlay}>
        <div className={styles.container}>
          <h1 className={styles.title}>Bienvenue à ArtOttawa</h1>
          <p className={styles.description}>
            Découvrez l'art et la culture d'Ottawa, la capitale du Canada. Explorez notre collection d'art unique et réservez des visites guidées pour une expérience inoubliable.
          </p>
        </div>
      </div>
      <div className={styles.expositionsSection}>
        <h2>Nos Expositions</h2>
        <div className={styles.expositions}>
          <div className={styles.exposition}>
            <Image 
              src="/exposition1.jpg" 
              alt="Exposition 1" 
              width={400} 
              height={300} 
              className={styles.expositionImage}
            />
            <p>Art moderne</p>
          </div>
          <div className={styles.exposition}>
            <Image 
              src="/exposition2.jpg" 
              alt="Exposition 2" 
              width={400} 
              height={300} 
              className={styles.expositionImage}
            />
            <p>Art historique</p>
          </div>
          <div className={styles.exposition}>
            <Image 
              src="/exposition3.jpg" 
              alt="Exposition 3" 
              width={400} 
              height={300} 
              className={styles.expositionImage}
            />
            <p>Art contemporain</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Accueil;
