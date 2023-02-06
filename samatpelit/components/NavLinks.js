import Button from "./Button"
import styles from "@/styles/NavLinks.module.css"
import { useRouter } from "next/router"
import { FaGamepad, FaQuestion, FaUser } from "react-icons/fa"

export default function NavLinks({ isBurger }) {
  const router = useRouter()

  const handleClick = (destination) => {
    router.push(destination)
  }

  if (isBurger == false) {
    return (
      <nav>
        <ul className={styles.default}>
          <Button
            type="button"
            variant="navIcon"
            onClick={() => handleClick("/games")}
          >
            <FaGamepad />
          </Button>
          <Button
            type="button"
            variant="navIcon"
            onClick={() => handleClick("/help")}
          >
            <FaQuestion />
          </Button>
          <Button
            type="button"
            variant="navIcon"
            onClick={() => handleClick("/profile")}
          >
            <FaUser />
          </Button>
        </ul>
      </nav>
    )
  }
  if (isBurger == true) {
    return (
      <div className={styles.burger}>
        <ul>
          <Button
            type="button"
            variant="navIcon"
            onClick={() => handleClick("/games")}
          >
            <FaGamepad /> Pelit
          </Button>
          <Button
            type="button"
            variant="navIcon"
            onClick={() => handleClick("/help")}
          >
            <FaQuestion /> Help
          </Button>
          <Button
            type="button"
            variant="navIcon"
            onClick={() => handleClick("/profile")}
          >
            <FaUser /> Profile
          </Button>
        </ul>
      </div>
    )
  }
}
