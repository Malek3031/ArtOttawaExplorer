'use client';

import Contact from '../../Composents/Contact';
import Head from 'next/head';

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact - ArtOttawa</title>
        <meta name="description" content="Contactez-nous pour en savoir plus sur ArtOttawa et nos services." />
        <link rel="canonical" href="http://localhost:3000/contact" />
      </Head>
      <Contact />
    </>
  );
}
