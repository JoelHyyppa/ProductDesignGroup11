import styles from "@/styles/Header.module.css"
import Logo from "./Logo"
import Button from "./Button"
import Search from "./Search"
import LoginPage from "pages/account/login"
import Modal from "./Modal"
import RegisterModal from "./RegisterModal"
import RegisterPage from "pages/account/register"
import { useState } from "react"
import { useRouter } from "next/router"

export default function Header() {
  const router = useRouter()

  const handleClick = (destination) => {
    router.push(destination)
  }

  const [showModal, setShowModal] = useState(false)
  const [showRegisterModal, setShowRegisterModal] = useState(false)

  return (
    <header className={styles.header}>
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
          <Button onClick={() => setShowModal(true)} type="button">
            Kirjaudu
          </Button>
          <Button onClick={() => setShowRegisterModal(true)} type="button">
            Rekisteröidy
          </Button>
        </ul>
      </nav>
      <Modal show={showModal} onClose={() => setShowModal(false)}>
        {LoginPage}
      </Modal>
      <RegisterModal show={showRegisterModal} onClose={() => setShowRegisterModal(false)}>
        {RegisterPage}
      </RegisterModal>
    </header>
  )
}
