
import { Link } from "@tanstack/react-router"

const navStyle = {
    background: '#09090b',
    borderBottom: '1px solid #27272a',
    color: 'white',
    padding: '14px 32px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
}

const linkStyle = { color: '#71717a', fontSize: '14px', fontWeight: '500', textDecoration: 'none' }

const NavBar = () => {
    return (
        <nav style={navStyle}>
            <Link to="/home" style={linkStyle}>Home</Link>
            <Link to="/users" style={linkStyle}>Users</Link>
            <Link to="/login" style={linkStyle}>Login</Link>
        </nav>
    )
}

export default NavBar;