import {FaUser} from 'react-icons/fa'
import { ToastContainer, toast} from 'react-toastify'
import { useState, useEffect, useContext } from 'react'
import Link from 'next/link'
import AuthContext from '@/context/AuthContext'
import 'react-toastify/dist/ReactToastify.css'
import styles from '@/styles/AuthForm.module.css'


export default function RegisterPage() {
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {register, error} = useContext(AuthContext)

    const handleSubmit = e => {
        e.preventDefault()
        register({username, email, password});
    }
  return (
        <div className={styles.auth}>
            <h1>
    <FaUser /> Rekisteröidy
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
                    <label htmlFor="username">Username</label>
                    <input
                     type="text" 
                     id="username" 
                     value={username} 
                    onChange={(e) => setUsername(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                     type="password" 
                     id="password" 
                     value={password} 
                    onChange={(e) => setPassword(e.target.value)}/>
                </div>

                <input type='submit' value='Register' className='btn' />
                <p><Link href='/account/login'>Already have an account? Click here!</Link></p>
            </form>
        </div>
  )
}
