import styles from "@/styles/Header.module.css"
import Logo from "./Logo"
import Button from "./Button"
import Search from "./Search"
import LoginPage from "pages/account/login"
import Modal from "./Modal"
import { useState } from "react"
import { useRouter } from "next/router"

export default function Header() {
  const router = useRouter()

  const handleClick = (destination) => {
    router.push(destination)
  }

export default function Header() {
  const [showModal, setShowModal] = useState(false)
  return (
    <header className={styles.header}>
    <div>
    
    <a href="/games"><Button>Pelit</Button></a>
    <a href="/account/register"><Button>Rekisteröidy</Button></a>
      </div>
      <Logo />

      <h2>Virkistäytymispelejä kaikille opiskelijoille!</h2>
      <Search />

      <nav>
        <ul>
          <Button type="button" onClick={() => handleClick("/games")}>
            Games
          </Button>
          <Button type="button" onClick={() => handleClick("/help")}>
            Help
          </Button>
          <Button type="button" onClick={() => handleClick("/profile")}>
            \o/
          </Button>
          <button onClick={() => setShowModal(true)}
    className='btn-secondary btn-icon'>Kirjaudu</button>
        </ul>
      </nav>
      <Modal show={showModal} onClose={() =>
      setShowModal(false)}>
        {LoginPage}
      </Modal>
    </header>
  )
}
