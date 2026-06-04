import { useContext } from 'react'
import { AuthContext } from '../Context/AuthContext'

const HomePage = () => {
    const { user, logout } = useContext(AuthContext)

    const initial = user?.name?.charAt(0)?.toUpperCase()
        ?? user?.email?.charAt(0)?.toUpperCase()
        ?? '?'

    return (
        <div style={{ flex: 1, background: '#09090b', minHeight: 'calc(100vh - 57px)' }}
            className="flex flex-col items-center justify-center py-12">

            <div className="w-full max-w-md px-4">
                <div className="rounded-2xl p-10 text-center"
                    style={{ background: '#18181b', border: '1px solid #27272a', boxShadow: '0 25px 60px rgba(0,0,0,0.6)' }}>

                    {/* Avatar */}
                    <div className="mx-auto mb-6 w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-bold"
                        style={{ background: 'linear-gradient(135deg, #6366f1, #a855f7)' }}>
                        {initial}
                    </div>

                    <h1 className="text-3xl font-semibold tracking-tight mb-1" style={{ color: '#fafafa' }}>
                        Welcome back
                    </h1>

                    {user?.email
                        ? <p className="text-sm mb-6" style={{ color: '#818cf8' }}>{user.email}</p>
                        : <p className="text-sm mb-6" style={{ color: '#52525b' }}>You are authenticated.</p>
                    }

                    <div className="mb-6" style={{ height: '1px', background: '#27272a' }} />

                    <p className="text-sm mb-8" style={{ color: '#71717a' }}>
                        You have successfully logged in to your account.
                    </p>

                    <button
                        onClick={logout}
                        className="w-full py-2.5 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer"
                        style={{ background: '#27272a', border: '1px solid #3f3f46', color: '#a1a1aa' }}
                        onMouseOver={e => { e.currentTarget.style.background = '#3f3f46'; e.currentTarget.style.color = '#fafafa' }}
                        onMouseOut={e => { e.currentTarget.style.background = '#27272a'; e.currentTarget.style.color = '#a1a1aa' }}
                    >
                        Sign out
                    </button>
                </div>

                <p className="text-xs text-center mt-6" style={{ color: '#3f3f46' }}>
                    Tanstak Lab — {new Date().getFullYear()}
                </p>
            </div>
        </div>
    )
}

export default HomePage
