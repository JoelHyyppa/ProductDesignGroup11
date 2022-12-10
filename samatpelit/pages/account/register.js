import {FaUser} from 'react-icons/fa'
import { ToastContainer, toast} from 'react-toastify'
import { useState, useEffect, useContext } from 'react'
import Link from 'next/link'
import 'react-toastify/dist/ReactToastify.css'
import styles from '@/styles/AuthForm.module.css'

export default function RegisterPage() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const handleSubmit = e => {
        e.preventDefault()
        console.log({username, password});
    }
  return (
        <div className={styles.auth}>
            <h1>
    <FaUser /> Rekisteröidy
            </h1>
            <ToastContainer />
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username</label>
                    <input
                     type="username" name="username" 
                     value={username} 
                    onChange={(e) => setUsername(e.target.value)}/>
                </div>
                <div>
                    <label>Password</label>
                    <input
                     type="password" name="password" 
                     value={password} 
                    onChange={(e) => setPassword(e.target.value)}/>
                </div>

                <input type='submit' value='Register' className='btn' />
                <p><Link href='/account/login'>Already have an account? Click here!</Link></p>
            </form>
        </div>
  )
}
