import styles from "@/styles/header.module.css"
import Button from "./Button"

export default function Header() {
  return (
    <header className={styles.header}>
    <div><Button>Kirjaudu</Button>
    <Button>Pelit</Button>
    <Button>Rekisteröidy</Button></div>
      <h1> Samat Pelit </h1>
      <h2>Virkistäytymispelejä kaikille opiskelijoille!</h2>
      <p>
        {" "}
        <input class="searchBar" type="text" placeholder="Etsi peliä..." />{" "}
      </p>
    </header>
  )
}
