import styles from "@/styles/header.module.css"
import Logo from "./Logo"
import Button from "./Button"
import Search from "./Search"

export default function Header() {
  return (
    <header className={styles.header}>
    <div><Button>Kirjaudu</Button>
    <Button>Pelit</Button>
    <Button>Rekisteröidy</Button></div>
      <Logo />
      <h2>Virkistäytymispelejä kaikille opiskelijoille!</h2>
      <Search />
    </header>
  )
}
