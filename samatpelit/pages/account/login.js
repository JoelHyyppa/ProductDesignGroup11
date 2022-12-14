import {FaUser} from 'react-icons/fa'
import { ToastContainer, toast} from 'react-toastify'
import { useState, useEffect, useContext } from 'react'
import Link from 'next/link'
import 'react-toastify/dist/ReactToastify.css'
import styles from '@/styles/AuthForm.module.css'


export default function LoginPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleSubmit = e => {
        e.preventDefault()
        console.log({email, password});
    }
  return (
        <div className={styles.auth}>
            <h1>
    <FaUser /> Kirjaudu
            </h1>
            <ToastContainer />
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email Address</label>
                    <input
                     type="email" 
                     id="email" 
                     value={email} 
                    onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                     type="password" 
                     id="password" 
                     value={password} 
                    onChange={(e) => setPassword(e.target.value)}/>
                </div>

                <input type='submit' value='Login' className='btn' />
            </form>
            <p><Link href='/account/register'>New user? Sign up by clicking!</Link></p>
        </div>
  )
}
