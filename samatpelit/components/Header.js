import styles from "@/styles/Header.module.css"
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
      <nav>
        <ul>
          <Button>
            <Link href="/games">Games</Link>
          </Button>
          <Button>
            <Link href="/help">Help</Link>
          </Button>
          <Button>
            <Link href="/profile">\o/</Link>
          </Button>
        </ul>
      </nav>
    </header>
  )
}
