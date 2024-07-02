'use client';

import { useRef, useState } from 'react';
import styles from './Connexion.module.css';
import Image from 'next/image';
import Head from 'next/head';

const Connexion = () => {
  const usernameRef = useRef();
  const passwordRef = useRef();
  const [errors, setErrors] = useState({});

  const validate = () => {
    let tempErrors = {};
    if (!usernameRef.current.value) tempErrors.username = 'Le nom d\'utilisateur est requis';
    if (!passwordRef.current.value) tempErrors.password = 'Le mot de passe est requis';
    return tempErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const tempErrors = validate();
    if (Object.keys(tempErrors).length === 0) {
      // Submit the form
      const formData = {
        username: usernameRef.current.value,
        password: passwordRef.current.value,
      };
      console.log('Form data:', formData);
    } else {
      setErrors(tempErrors);
    }
  };

  return (
    <>
      <Head>
        <title>Connexion - ArtOttawa</title>
        <meta name="description" content="Connectez-vous à votre compte ArtOttawa pour accéder à des fonctionnalités exclusives." />
        <link rel="canonical" href="http://localhost:3000/connexion" />
      </Head>
      <div className={styles.page}>
        <div className={styles.banner}>
          <Image 
            src="/planconnexion.jpg" 
            alt="Connexion Banner" 
            layout="fill" 
            objectFit="cover"
          />
        </div>
        <div className={styles.container}>
          <h1 className={styles.title}>Connexion</h1>
          <form className={styles.form} onSubmit={handleSubmit}>
            <label className={styles.label} htmlFor="username">Nom d'utilisateur :</label>
            <input 
              className={styles.input} 
              type="text" 
              id="username" 
              name="username" 
              ref={usernameRef} 
            />
            {errors.username && <span className={styles.error}>{errors.username}</span>}

            <label className={styles.label} htmlFor="password">Mot de passe :</label>
            <input 
              className={styles.input} 
              type="password" 
              id="password" 
              name="password" 
              ref={passwordRef} 
            />
            {errors.password && <span className={styles.error}>{errors.password}</span>}

            <button className={styles.button} type="submit">Connexion</button>
          </form>
          <button className={styles.forgotPassword} type="button">Mot de passe oublié ?</button>
        </div>
      </div>
    </>
  );
}

export default Connexion;
