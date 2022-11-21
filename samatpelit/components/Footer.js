import styles from "@/styles/Footer.module.css"
import { useRouter } from "next/router"

export default function Footer() {
  const router = useRouter()

  return (
    <footer className={styles.footer}>

      <p>Made with love by Samat äijät</p>
    </footer>
  )
}