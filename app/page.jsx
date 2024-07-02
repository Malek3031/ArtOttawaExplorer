'use client';
import { usePathname } from 'next/navigation';
import Accueil from '../Composents/Accueil';
import About from '../Composents/About';
import Reservation from '../Composents/Reservation';
import Contact from '../Composents/Contact';
import Connexion from '../Composents/Connexion';
import styles from './page.module.css';
import Head from 'next/head';

export default function Page() {
  const pathname = usePathname();

  const getPageHead = (path) => {
    switch (path) {
      case '/about':
        return (
          <Head>
            <title>À propos de ArtOttawa</title>
            <meta name="description" content="ArtOttawa est dédié à la promotion de l'art et de la culture dans la capitale du Canada. Nous croyons en la puissance de l'art pour inspirer et connecter les gens. Notre mission est de rendre l'art accessible à tous et de soutenir les artistes locaux." />
            <link rel="canonical" href="http://localhost:3000/about" />
          </Head>
        );
      case '/reservation':
        return (
          <Head>
            <title>Réservation - ArtOttawa</title>
            <meta name="description" content="Réservez votre visite guidée à ArtOttawa pour découvrir notre collection d'art unique et profiter d'une expérience inoubliable." />
            <link rel="canonical" href="http://localhost:3000/reservation" />
          </Head>
        );
      case '/contact':
        return (
          <Head>
            <title>Contact - ArtOttawa</title>
            <meta name="description" content="Contactez-nous pour en savoir plus sur ArtOttawa et nos services." />
            <link rel="canonical" href="http://localhost:3000/contact" />
          </Head>
        );
      case '/connexion':
        return (
          <Head>
            <title>Connexion - ArtOttawa</title>
            <meta name="description" content="Connectez-vous à votre compte ArtOttawa pour accéder à des fonctionnalités exclusives." />
            <link rel="canonical" href="http://localhost:3000/connexion" />
          </Head>
        );
      default:
        return (
          <Head>
            <title>Accueil - ArtOttawa</title>
            <meta name="description" content="Découvrez l'art et la culture d'Ottawa, la capitale du Canada. Explorez notre collection d'art unique et réservez des visites guidées pour une expérience inoubliable." />
            <link rel="canonical" href="http://localhost:3000/" />
          </Head>
        );
    }
  };

  return (
    <div className={styles.page}>
      {getPageHead(pathname)}
      {pathname === '/' && <Accueil />}
      {pathname === '/about' && <About />}
      {pathname === '/reservation' && <Reservation />}
      {pathname === '/contact' && <Contact />}
      {pathname === '/connexion' && <Connexion />}
    </div>
  );
}
