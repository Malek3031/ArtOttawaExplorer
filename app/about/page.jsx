'use client';

import About from '../../Composents/About';
import Head from 'next/head';

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>À propos de ArtOttawa</title>
        <meta name="description" content="ArtOttawa est dédié à la promotion de l'art et de la culture dans la capitale du Canada. Nous croyons en la puissance de l'art pour inspirer et connecter les gens. Notre mission est de rendre l'art accessible à tous et de soutenir les artistes locaux." />
        <link rel="canonical" href="http://localhost:3000/about" />
      </Head>
      <About />
    </>
  );
}
