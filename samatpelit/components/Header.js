import styles from "@/styles/header.module.css"
import Logo from "./Logo"
import Button from "./Button"
import Search from "./Search"

export default function Header() {
  return (
    <header className={styles.header}>
    <div>
    <a href="/account/login"><Button>Kirjaudu</Button></a>
    <a href="/games"><Button>Pelit</Button></a>
    <a href="/account/register"><Button>Rekisteröidy</Button></a>
    </div>
      <Logo />
      <h2>Virkistäytymispelejä kaikille opiskelijoille!</h2>
      <Search />
    </header>
  )
}
