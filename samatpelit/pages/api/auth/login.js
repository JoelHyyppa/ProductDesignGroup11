import {FaUser} from 'react-icons/fa'
import { ToastContainer, toast} from 'react-toastify'
import { useState, useEffect, useContext } from 'react'
import Link from 'next/link'
import 'react-toastify/dist/ReactToastify.css'
import styles from '@/styles/AuthForm.module.css'
import { getProviders, signIn } from "next-auth/react"

export default function LoginPage() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const handleSubmit = e => {
        e.preventDefault()
        console.log({username, password});
    }
  return (
        <div className={styles.auth}>
            <h1>
    <FaUser /> Kirjaudu
            </h1>
            <ToastContainer />
            <form onSubmit={handleSubmit}>
                <div>
                    <label >Username</label>
                    <input
                     name="username" type="username" value={username} 
                    onChange={(e) => setUsername(e.target.value)}/>
                </div>
                <div>
                    <label>Password</label>
                    <input
                     name="password" type="password"
                     value={password} 
                    onChange={(e) => setPassword(e.target.value)}/>
                </div>

                <input type='submit' value='Login' className='btn' />
            </form>
            <p><Link href='/account/register'>New user? Sign up by clicking!</Link></p>
        </div>
  )
}