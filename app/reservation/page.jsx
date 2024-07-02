'use client';

import Reservation from '../../Composents/Reservation';
import Head from 'next/head';

export default function ReservationPage() {
  return (
    <>
      <Head>
        <title>Réservation - ArtOttawa</title>
        <meta name="description" content="Réservez votre visite guidée à ArtOttawa pour découvrir notre collection d'art unique et profiter d'une expérience inoubliable." />
        <link rel="canonical" href="http://localhost:3000/reservation" />
      </Head>
      <Reservation />
    </>
  );
}
