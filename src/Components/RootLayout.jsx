import NavBar from "./NavBar"
import { Outlet } from "@tanstack/react-router"

const RootLayout = () => {
    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#09090b' }}>
            <NavBar />
            <Outlet />
        </div>
    )
}

export default RootLayout;