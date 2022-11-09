import styles from '../styles/header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
        <button className={styles.button}> Login </button>
        <button className={styles.button}> Help </button>
        <h1> Samat Pelit </h1>
        <h2>Virkistäytymispelejä kaikille opiskelijoille!</h2>
        <p> <input class="searchBar" type="text" placeholder="Etsi peliä..." /> </p>
      </header>
    
  )
}
