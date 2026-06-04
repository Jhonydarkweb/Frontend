import { useRef, useContext } from 'react'
import { useNavigate } from '@tanstack/react-router'
import { AuthContext } from '../Context/AuthContext'
import { decodeToken } from '../Services/AuthService'

const ROLE_CLAIM = 'http://schemas.microsoft.com/ws/2008/06/identity/claims/role'

export default function Login() {
    const { login, isLoading, isError } = useContext(AuthContext)
    const emailRef = useRef()
    const passwordRef = useRef()
    const navigate = useNavigate()

    async function handleSubmit(e) {
        e.preventDefault()
        try {
            await login(emailRef.current.value, passwordRef.current.value)
            const token = localStorage.getItem('authToken')
            const decoded = decodeToken(token)
            if (decoded[ROLE_CLAIM] === 'admin') {
                navigate({ to: '/admin' })
            } else {
                navigate({ to: '/home' })
            }
        } catch {
            // error is surfaced via isError from context
        }
    }

    return (
        <div style={{ flex: 1, background: '#09090b', minHeight: 'calc(100vh - 57px)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <form
                onSubmit={handleSubmit}
                style={{ width: '100%', maxWidth: '380px', padding: '40px', background: '#18181b', border: '1px solid #27272a', borderRadius: '16px', boxShadow: '0 25px 60px rgba(0,0,0,0.6)' }}
            >
                <h2 style={{ fontSize: '24px', fontWeight: '600', color: '#fafafa', textAlign: 'center', marginBottom: '28px', letterSpacing: '-0.02em' }}>
                    Sign In
                </h2>

                <input
                    type="text"
                    placeholder="Email"
                    ref={emailRef}
                    required
                    style={{ width: '100%', padding: '10px 14px', marginBottom: '12px', background: '#09090b', border: '1px solid #3f3f46', borderRadius: '8px', color: '#fafafa', fontSize: '14px', outline: 'none', boxSizing: 'border-box' }}
                />

                <input
                    type="password"
                    placeholder="Password"
                    ref={passwordRef}
                    required
                    style={{ width: '100%', padding: '10px 14px', marginBottom: '24px', background: '#09090b', border: '1px solid #3f3f46', borderRadius: '8px', color: '#fafafa', fontSize: '14px', outline: 'none', boxSizing: 'border-box' }}
                />

                <button
                    type="submit"
                    disabled={isLoading}
                    style={{ width: '100%', padding: '10px', background: isLoading ? '#4338ca' : '#4f46e5', border: 'none', borderRadius: '8px', color: '#fff', fontSize: '14px', fontWeight: '600', cursor: isLoading ? 'not-allowed' : 'pointer', transition: 'background 0.2s' }}
                >
                    {isLoading ? 'Signing in...' : 'Sign In'}
                </button>

                {isError && (
                    <p style={{ marginTop: '16px', fontSize: '13px', textAlign: 'center', color: '#f87171' }}>
                        Invalid credentials. Please try again.
                    </p>
                )}
            </form>
        </div>
    )
}
