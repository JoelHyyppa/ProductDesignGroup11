import styles from '@/styles/Modal.module.css'
import LoginPage from 'pages/account/login'
import { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import {FaTimes} from 'react-icons/fa'

export default function Modal({show, onClose, children, title} ){

 const [isBrowser, setIsBrowser] = useState(false)
 useEffect(() => setIsBrowser(true)) 

 const handleClose = (event) => {
   
    ({onClose}) ()

    event.preventDefault ();
 }

 const modalContent = show ? (
    <div className={styles.modal}>
    <div className={styles.header}>
        <a href="/" onClick={handleClose}>
            <FaTimes />
        </a>
    </div>
    {title && <div>{title}</div>}
    <div className={styles.body}><LoginPage /></div>
    </div>
 ) : null
  
 if(isBrowser) {
    return ReactDOM.createPortal(modalContent, document.getElementById
    ('modal-root')) } else {
        return null
    }
 }

