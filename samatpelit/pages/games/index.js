import GameGrid from "@/components/GameGrid"
import Layout from "@/components/Layout"
import styles from "../../styles/header.module.css"
import Button from "@/components/Button"
import Logo from "@/components/Logo"

export default function GamesPage() {
  return (
    <div>
      <header className={styles.header}>
        <div>
          <Button>Kirjaudu</Button>
          <a href="/">
            <Button>Home Page</Button>
          </a>
          <Button>Rekisteröidy</Button>
        </div>
        <Logo />
        <h2>Virkistäytymispelejä kaikille opiskelijoille!</h2>
        <p>
          {" "}
          <input
            class="searchBar"
            type="text"
            placeholder="Etsi peliä..."
          />{" "}
        </p>
      </header>
      <GameGrid />
    </div>
  )
}
