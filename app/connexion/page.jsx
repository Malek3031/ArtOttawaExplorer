'use client';

import Connexion from '../../Composents/Connexion';
import Head from 'next/head';

export default function ConnexionPage() {
  return (
    <>
      <Head>
        <title>Connexion - ArtOttawa</title>
        <meta name="description" content="Connectez-vous à votre compte ArtOttawa pour accéder à des fonctionnalités exclusives." />
        <link rel="canonical" href="http://localhost:3000/connexion" />
      </Head>
      <Connexion />
    </>
  );
}
