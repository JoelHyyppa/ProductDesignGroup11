/*import { createContext, useState, useEffect } from 'react'
//import {useRouter} from 'next/router'
//import {API_URL} from '@/pages/index'

const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [error, setError] = useState(null)

//register user
const register = async (user) => {
    console.log(user);
}

//login user
const login = async ({ email:identifier, password }) =>
{
    console.log({ identifier, password });
}

//logout user
const logout = async () => {
    console.log('Logout');
}

//check if user is logged in
const checkUserLoggedIn = async ({user}) => {
    console.log('Check');
}

return (
    <AuthContext.Provider value={{ user, error, register, 
    login, logout}}>
    {children}
    </AuthContext.Provider>
)
}
export default AuthContext;
*/
