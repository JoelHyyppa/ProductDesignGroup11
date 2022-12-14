import styles from '@/styles/Modal.module.css'
import { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import {FaTimes} from 'react-icons/fa'
import RegisterPage from 'pages/account/register'
import Button from './Button'

export default function RegisterModal({show, onClose, children, title} ){

 const [isBrowser, setIsBrowser] = useState(false)
 useEffect(() => setIsBrowser(true)) 

 const handleClose = (event) => {
   
    ({onClose}) ()

    event.preventDefault ();
 }

 const modalContent = show ? (
    <div className={styles.modal}>
    <div className={styles.header}>
    <Button type="button" onClick={onClose}>
          <FaTimes />
        </Button>
    </div>
    {title && <div>{title}</div>}
    <div className={styles.body}><RegisterPage /></div>
    </div>
 ) : null
  
 if(isBrowser) {
    return ReactDOM.createPortal(modalContent, document.getElementById
    ('modal-root')) } else {
        return null
    }
 }


