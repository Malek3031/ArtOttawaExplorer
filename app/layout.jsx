'use client';
import Head from 'next/head';
import Header from '../Composents/Header';
import Footer from '../Composents/Footer';
import styles from './layout.module.css';
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <Head>
        <title>ArtOttawa - Découvrez l'Art à Ottawa</title>
        <meta name="description" content="Découvrez l'art et la culture d'Ottawa, la capitale du Canada. Explorez notre collection d'art unique et réservez des visites guidées pour une expérience inoubliable." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body className={styles.body}>
        <Header />
        <main className={styles.main}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
