import styles from "@/styles/Header.module.css"
import Logo from "./Logo"
import Button from "./Button"
import Search from "./Search"
import LoginPage from "pages/api/auth/login"
import Modal from "./Modal"
import RegisterModal from "./RegisterModal"
import RegisterPage from "pages/account/register"
import { useState } from "react"
import { useRouter } from "next/router"
import { useSession, signIn, signOut } from "next-auth/react"

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
          <Button type="button" onClick={() => handleClick("/api/auth/signin")}>
            Kirjaudu
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

export function Component() {
  const { data: session } = useSession()
  if(session) {
    console.log("Signed in")
    return <>
      Signed in as {session.user.username} <br/>
      <ul><Button onClick={() => signOut()}>Sign out</Button></ul>
    </>
  }
  return <>
    Not signed in <br/>
    <ul><Button onClick={() => signIn()}>Sign in</Button></ul>
  </>
}