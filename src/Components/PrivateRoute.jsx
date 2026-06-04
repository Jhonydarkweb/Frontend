import { useContext, useEffect } from 'react'
import { useNavigate } from '@tanstack/react-router'
import { AuthContext } from '../Context/AuthContext'

const ROLE_CLAIM = 'http://schemas.microsoft.com/ws/2008/06/identity/claims/role'

export default function PrivateRoute({ children, role }) {
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()

    useEffect(() => {
        if (!user) {
            navigate({ to: '/login' })
        } else if (role && user[ROLE_CLAIM] !== role) {
            navigate({ to: '/unauthorized' })
        }
    }, [user, role, navigate])

    if (!user) return null
    if (role && user[ROLE_CLAIM] !== role) return null

    return children
}
