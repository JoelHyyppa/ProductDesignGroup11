import styles from "@/styles/header.module.css"
import Logo from "./Logo"
import Button from "./Button"
import Search from "./Search"
import Link from "next/link"

export default function Header() {
  return (
    <header className={styles.header}>
      <Logo />
      <h2>Virkistäytymispelejä kaikille opiskelijoille!</h2>
      <Search />
      <div>
        <Button>Kirjaudu</Button>
        <a href="/games">
          <Button>Pelit</Button>
        </a>
        <Button>Rekisteröidy</Button>
      </div>
    </header>
  )
}
