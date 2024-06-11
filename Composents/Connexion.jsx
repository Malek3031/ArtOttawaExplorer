import styles from './Connexion.module.css';
import Image from 'next/image';

const Connexion = () => {
  return (
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
        <form className={styles.form}>
          <label className={styles.label} htmlFor="username">Nom d'utilisateur :</label>
          <input className={styles.input} type="text" id="username" name="username" placeholder="Nom d'utilisateur" />
          
          <label className={styles.label} htmlFor="password">Mot de passe :</label>
          <input className={styles.input} type="password" id="password" name="password" placeholder="Mot de passe" />
          
          <button className={styles.button} type="submit">Connexion</button>
        </form>
        <button className={styles.forgotPassword} type="button">Mot de passe oublié ?</button>
      </div>
    </div>
  );
}

export default Connexion;
