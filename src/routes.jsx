import { createRootRoute, createRoute, createRouter, createBrowserHistory, redirect } from '@tanstack/react-router'

import RootLayout from './Components/RootLayout'
import Login from './Components/Login'
import PrivateRoute from './Components/PrivateRoute'
import AdminPage from './Pages/AdminPage'
import HomePage from './Pages/HomePage'
import UnauthorizedPage from './Pages/UnauthorizedPage'
import UsersPage from './Pages/UsersPage'

const rootRoute = createRootRoute({
    component: RootLayout,
})

const indexRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/',
    beforeLoad: () => { throw redirect({ to: '/login' }) },
    component: () => null,
})

const loginRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/login',
    component: Login,
})

const adminRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/admin',
    component: () => (
        <PrivateRoute role="admin">
            <AdminPage />
        </PrivateRoute>
    ),
})

const homeRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/home',
    component: () => (
        <PrivateRoute>
            <HomePage />
        </PrivateRoute>
    ),
})

const unauthorizedRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/unauthorized',
    component: UnauthorizedPage,
})

const usersRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/users',
    component: () => (
        <PrivateRoute>
            <UsersPage />
        </PrivateRoute>
    ),
})

rootRoute.addChildren([
    indexRoute,
    loginRoute,
    adminRoute,
    homeRoute,
    unauthorizedRoute,
    usersRoute,
])

const router = createRouter({
    routeTree: rootRoute,
    history: createBrowserHistory(),
    defaultErrorComponent: () => <div>Something went wrong</div>,
})

export default router
