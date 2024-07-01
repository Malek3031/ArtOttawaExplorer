'use client';

import { usePathname } from 'next/navigation';
import Head from 'next/head';
import Header from '../Composents/Header';
import Footer from '../Composents/Footer';
import Accueil from '../Composents/Accueil';
import About from '../Composents/About';
import Reservation from '../Composents/Reservation';
import Contact from '../Composents/Contact';
import Connexion from '../Composents/Connexion';
import styles from './layout.module.css';
import './globals.css';

export default function RootLayout({ children }) {
  const pathname = usePathname();

  // Gestion de la page courante
  const getPageComponent = (path) => {
    switch (path) {
      case '/about':
        return <About />;
      case '/reservation':
        return <Reservation />;
      case '/contact':
        return <Contact />;
      case '/connexion':
        return <Connexion />;
      default:
        return <Accueil />;
    }
  };

  return (
    <html lang="fr">
      <Head>
        <title>ArtOttawa - Découvrez l'Art à Ottawa</title>
        <meta name="description" content="Découvrez l'art et la culture d'Ottawa, la capitale du Canada. Explorez notre collection d'art unique et réservez des visites guidées pour une expérience inoubliable." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body>
        <Header />
        <main className={pathname === '/connexion' ? styles.connexionBackground : ''}>
          {pathname === '/' ? children : getPageComponent(pathname)}
        </main>
        <Footer />
      </body>
    </html>
  );
}
