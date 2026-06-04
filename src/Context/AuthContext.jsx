import { createContext, useState, useEffect } from 'react'
import { useLogin } from '../Hooks/useLogin'
import { client, decodeToken } from '../Services/AuthService'

export const AuthContext = createContext()

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null)
    const [token, setToken] = useState(null)

    const mutation = useLogin()
    const isLoading = mutation.isPending
    const isError = mutation.isError

    async function login(email, password) {
        const receivedToken = await mutation.mutateAsync({ email, password })
        localStorage.setItem('authToken', receivedToken)
        client.defaults.headers.common['Authorization'] = `Bearer ${receivedToken}`
        setToken(receivedToken)
        setUser(decodeToken(receivedToken))
    }

    function logout() {
        localStorage.removeItem('authToken')
        delete client.defaults.headers.common['Authorization']
        setUser(null)
        setToken(null)
    }

    useEffect(() => {
        const stored = localStorage.getItem('authToken')
        if (stored) {
            client.defaults.headers.common['Authorization'] = `Bearer ${stored}`
            setToken(stored)
            setUser(decodeToken(stored))
        }
    }, [])

    return (
        <AuthContext.Provider value={{ user, token, login, logout, isLoading, isError }}>
            {children}
        </AuthContext.Provider>
    )
}
