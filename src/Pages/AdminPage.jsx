import { useContext } from 'react'
import { AuthContext } from '../Context/AuthContext'

export default function AdminPage() {
    const { user, logout } = useContext(AuthContext)

    const initial = user?.name?.charAt(0)?.toUpperCase()
        ?? user?.email?.charAt(0)?.toUpperCase()
        ?? 'A'

    return (
        <div style={{ flex: 1, background: '#09090b', minHeight: 'calc(100vh - 57px)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '48px 16px' }}>
            <div style={{ width: '100%', maxWidth: '420px' }}>
                <div style={{ background: '#18181b', border: '1px solid #27272a', borderRadius: '16px', padding: '40px', boxShadow: '0 25px 60px rgba(0,0,0,0.6)', textAlign: 'center' }}>

                    {/* Avatar */}
                    <div style={{ margin: '0 auto 24px', width: '64px', height: '64px', borderRadius: '50%', background: 'linear-gradient(135deg, #6366f1, #a855f7)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', fontWeight: '700', color: '#fff' }}>
                        {initial}
                    </div>

                    <h1 style={{ fontSize: '28px', fontWeight: '600', color: '#fafafa', marginBottom: '6px', letterSpacing: '-0.02em' }}>
                        Admin Dashboard
                    </h1>

                    {user?.email && (
                        <p style={{ fontSize: '13px', color: '#818cf8', marginBottom: '24px' }}>{user.email}</p>
                    )}

                    <div style={{ height: '1px', background: '#27272a', marginBottom: '24px' }} />

                    <p style={{ fontSize: '14px', color: '#71717a', marginBottom: '32px' }}>
                        Welcome, admin. You have full access.
                    </p>

                    <button
                        onClick={logout}
                        style={{ width: '100%', padding: '10px', background: '#27272a', border: '1px solid #3f3f46', borderRadius: '8px', color: '#a1a1aa', fontSize: '14px', fontWeight: '500', cursor: 'pointer', transition: 'all 0.2s' }}
                        onMouseOver={e => { e.currentTarget.style.background = '#3f3f46'; e.currentTarget.style.color = '#fafafa' }}
                        onMouseOut={e => { e.currentTarget.style.background = '#27272a'; e.currentTarget.style.color = '#a1a1aa' }}
                    >
                        Sign out
                    </button>
                </div>

                <p style={{ textAlign: 'center', fontSize: '12px', color: '#3f3f46', marginTop: '24px' }}>
                    Tanstak Lab — {new Date().getFullYear()}
                </p>
            </div>
        </div>
    )
}
