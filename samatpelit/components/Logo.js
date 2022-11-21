import styles from "@/styles/logo.module.css"
import Link from "next/link"

export default function Logo() {
  return (
    <div className={styles.logo}>
      <Link href="/">
        <h1>Samat Pelit</h1>
      </Link>
    </div>
  )
}
