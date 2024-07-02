'use client';

import { usePathname } from 'next/navigation';
import Head from 'next/head';
import Header from '../composents/Header';
import Footer from '../composents/Footer';
import Accueil from '../composents/Accueil';
import About from '../composents/About';
import Reservation from '../composents/Reservation';
import Contact from '../composents/Contact';
import Connexion from '../composents/Connexion';
import { ThemeProvider } from '../composents/ThemeContext'; 
import { LanguageProvider } from '../composents/LanguageContext'; 
import './globals.css';

export default function RootLayout({ children }) {
  const pathname = usePathname();
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
    <ThemeProvider>
      <LanguageProvider>
        <html lang="fr">
          <Head>
            <title>ArtOttawa-Découvrez l'Art à Ottawa</title>
            <meta name="description" content="Découvrez l'art et la culture d'Ottawa, la capitale du Canada. Explorez notre collection d'art unique et réservez des visites guidées pour une expérience inoubliable." />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          </Head>
          <body>
            <Header />
            <main>
              {pathname === '/' ? children : getPageComponent(pathname)}
            </main>
            <Footer />
          </body>
        </html>
      </LanguageProvider>
    </ThemeProvider>
  );
}