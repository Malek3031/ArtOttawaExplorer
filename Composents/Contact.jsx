'use client';

import { useForm } from 'react-hook-form';
import styles from './Contact.module.css';
import Image from 'next/image';
import Head from 'next/head';
import emailjs from 'emailjs-com';

const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    emailjs.send('service_08x7g4p', 'template_kkbfmmq', data, 'f3yXWy4qZ4Ulcaoou')
      .then((result) => {
        console.log(result.text);
        alert('Email envoyé avec succès!');
      }, (error) => {
        console.log(error.text);
        alert('Erreur lors de l\'envoi de l\'email.');
      });
  };

  return (
    <>
      <Head>
        <title>Contact - ArtOttawa</title>
        <meta name="description" content="Contactez-nous pour en savoir plus sur ArtOttawa et nos services." />
        <link rel="canonical" href="http://localhost:3000/contact" />
      </Head>
      <div className={styles.page}>
        <div className={styles.banner}>
          <Image 
            src="/planContact.jpg" 
            alt="Contact Banner" 
            layout="fill" 
            objectFit="cover"
          />
        </div>
        <div className={styles.overlay}>
          <div className={styles.container}>
            <div className={styles.contactDetails}>
              <div className={styles.contactInfo}>
                <h2>Apllez Nous</h2>
                <p>+1 (891)-979-0578</p>
              </div>
              <div className={styles.contactInfo}>
                <h2>Localisation</h2>
                <p>801 Aviation Pkwy, Ottawa, ON K1K 4R3</p>
              </div>
            </div>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
              <label className={styles.label} htmlFor="name">Nom :</label>
              <input 
                className={styles.input} 
                type="text" 
                id="name" 
                {...register('name', { required: 'Le nom est requis' })} 
              />
              {errors.name && <span className={styles.error}>{errors.name.message}</span>}

              <label className={styles.label} htmlFor="email">Email :</label>
              <input 
                className={styles.input} 
                type="email" 
                id="email" 
                {...register('email', { required: 'L\'email est requis', pattern: { value: /^\S+@\S+$/i, message: 'Email invalide' } })} 
              />
              {errors.email && <span className={styles.error}>{errors.email.message}</span>}

              <label className={styles.label} htmlFor="address">Adresse :</label>
              <input 
                className={styles.input} 
                type="text" 
                id="address" 
                {...register('address', { required: 'L\'adresse est requise' })} 
              />
              {errors.address && <span className={styles.error}>{errors.address.message}</span>}

              <label className={styles.label} htmlFor="message">Message :</label>
              <textarea 
                className={styles.textarea} 
                id="message" 
                {...register('message', { required: 'Le message est requis' })} 
              ></textarea>
              {errors.message && <span className={styles.error}>{errors.message.message}</span>}

              <button className={styles.button} type="submit">Soumettre</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
