import styles from "@/styles/Modal.module.css"
import LoginPage from "pages/account/login"
import { useState, useEffect } from "react"
import ReactDOM from "react-dom"
import { FaTimes } from "react-icons/fa"
import Button from "@/components/Button"

export default function Modal({ show, onClose, children, title }) {
  const [isBrowser, setIsBrowser] = useState(false)
  useEffect(() => setIsBrowser(true))

  const handleClose = (event) => {
    event.preventDefault()
    {
      onClose
    }
  }

  const modalContent = show ? (
    <div className={styles.modal}>
      <div className={styles.header}>
        <Button type="button" onClick={onClose}>
          <FaTimes />
        </Button>
      </div>
      {title && <div>{title}</div>}
      <div className={styles.body}>
        <LoginPage />
      </div>
    </div>
  ) : null

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById("modal-root")
    )
  } else {
    return null
  }
}
