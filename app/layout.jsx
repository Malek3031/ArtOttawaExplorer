'use client';
import { useState } from 'react';
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
  const [page, setPage] = useState('accueil');

  return (
    <html lang="fr">
      <Head>
        <title>ArtOttawa - Découvrez l'Art à Ottawa</title>
        <meta name="description" content="Découvrez l'art et la culture d'Ottawa, la capitale du Canada. Explorez notre collection d'art unique et réservez des visites guidées pour une expérience inoubliable." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body className={styles.body}>
        <Header setPage={setPage} />
        <main className={styles.main}>
          {page === 'accueil' && <Accueil />}
          {page === 'about' && <About />}
          {page === 'reservation' && <Reservation />}
          {page === 'contact' && <Contact />}
          {page === 'connexion' && <Connexion />}
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
