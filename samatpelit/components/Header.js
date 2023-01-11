import styles from "@/styles/Header.module.css"
import Logo from "./Logo"
import Button from "./Button"
import Search from "./Search"
import LoginPage from "pages/account/login"
import Modal from "./Modal"
import RegisterModal from "./RegisterModal"
import RegisterPage from "pages/account/register"
import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import useMediaQuery from "react-responsive"
import HamburgerMenu from "./HamburgerMenu"
import {FaGamepad,FaQuestion,FaUser} from "react-icons/fa"

export default function Header() {
  const router = useRouter()

  const isMobile = useMediaQuery({ query: '(max-width: 600px)'})
  const [isMobileUse, setIsMobile] = useState(false)

  useEffect(()=> {
    console.log("Effect!")
    console.log(!window.matchMedia("(max-width: 600px)").matches? false : true)
    setIsMobile(!window.matchMedia("(max-width: 600px)").matches? false : true)
  },[isMobile])

  const handleClick = (destination) => {
    router.push(destination)
  }

  const [showModal, setShowModal] = useState(false)
  const [showRegisterModal, setShowRegisterModal] = useState(false)

  if(isMobileUse == false){
  return (
    <header className={styles.header}>
      <Logo />

      <h2>Virkistäytymispelejä kaikille opiskelijoille!</h2>
      

      <nav>
        <ul>
          <Button type="button" variant="navIcon" onClick={() => handleClick("/games")}>
          <FaGamepad/>
          </Button>
          <Button type="button" onClick={() => handleClick("/help")}>
            <FaQuestion/>
          </Button>
          <Button type="button" onClick={() => handleClick("/profile")}>
            <FaUser/>
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
  )}
  if(isMobileUse == true) {
    return (
<header className={styles.header}>
      <Logo />
      <HamburgerMenu/>
    </header>
    )
    
  }
}


//<Search />

//for register and login:
/*
<Button onClick={() => setShowModal(true)} type="button">
            Kirjaudu
          </Button>
          <Button onClick={() => setShowRegisterModal(true)} type="button">
            Rekisteröidy
          </Button>
*/