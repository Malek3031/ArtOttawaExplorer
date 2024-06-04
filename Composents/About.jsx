import styles from './About.module.css';
import Image from 'next/image';

export default function About() {
  return (
    <div className={styles.about}>
      <div className={styles.banner}>
        <Image 
          src="/About.jpg" 
          alt="About Banner" 
          layout="responsive" 
          width={1200} 
          height={300} 
        />
        <h1 className={styles.siteName}>
          À propos de ArtOttawa
        </h1>
      </div>
      <div className={styles.introduction}>
        <h2>Notre Histoire</h2>
        <p>ArtOttawa est dédié à la promotion de l'art et de la culture dans la capitale du Canada. Nous croyons en la puissance de l'art pour inspirer et connecter les gens. Notre mission est de rendre l'art accessible à tous et de soutenir les artistes locaux.</p>
      </div>
    </div>
  );
}
