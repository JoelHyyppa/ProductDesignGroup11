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
          <a href="/account/login">
          <Button>Kirjaudu</Button>
          </a>
          <a href="/">
            <Button>Home Page</Button>
          </a>
          <a href="/account/register">
          <Button>Rekisteröidy</Button>
          </a>
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
