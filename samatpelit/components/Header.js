import styles from "@/styles/header.module.css"
import Logo from "./Logo"
import Button from "./Button"
import Search from "./Search"
import LoginPage from "pages/account/login"
import Modal from "./Modal"
import { useState } from "react"

export default function Header() {
  const [showModal, setShowModal] = useState(false)
  return (
    <header className={styles.header}>
    <div>
    <button onClick={() => setShowModal(true)}
    className='btn-secondary btn-icon'>Kirjaudu</button>
    <a href="/games"><Button>Pelit</Button></a>
    <a href="/account/register"><Button>Rekisteröidy</Button></a>
      </div>
      <Logo />
      <h2>Virkistäytymispelejä kaikille opiskelijoille!</h2>
      <Search />
      <Modal show={showModal} onClose={() =>
      setShowModal(false)}>
        {LoginPage}
      </Modal>
    </header>
  )
}
