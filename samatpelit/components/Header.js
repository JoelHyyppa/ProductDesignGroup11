import styles from "@/styles/header.module.css"
import Logo from "./Logo"

export default function Header() {
  return (
    <header className={styles.header}>
      <button className={styles.button}> Kirjaudu </button>
      <button className={styles.button}> Pelit </button>
      <Logo />
      <h2>Virkistäytymispelejä kaikille opiskelijoille!</h2>
      <p>
        {" "}
        <input class="searchBar" type="text" placeholder="Etsi peliä..." />{" "}
      </p>
    </header>
  )
}
