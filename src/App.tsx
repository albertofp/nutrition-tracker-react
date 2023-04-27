import Navbar from './components/Navbar'
import './input.css'
import Home from './components/Home'
import {
	Outlet,
	RouterProvider,
	Router,
	Route,
	RootRoute
} from '@tanstack/router'
import About from './components/About'
import Contact from './components/Contact'
import Login from './components/Login'
import Splash from './components/Splash'
import { ToastProvider } from './components/Toast/ToastContext'
import ToastContainer from './components/Toast/ToastContainer'
import { AuthProvider } from './useAuth'

const rootRoute = new RootRoute({
	component: Root
})

const indexRoute = new Route({
	getParentRoute: () => rootRoute,
	path: '/',
	component: Splash
})

const loginRoute = new Route({
	getParentRoute: () => rootRoute,
	path: '/login',
	component: Login
})

const homeRoute = new Route({
	getParentRoute: () => rootRoute,
	path: '/home',
	component: Home
})

const aboutRoute = new Route({
	getParentRoute: () => rootRoute,
	path: '/about',
	component: About
})

const contactRoute = new Route({
	getParentRoute: () => rootRoute,
	path: '/contact',
	component: Contact
})

const routeTree = rootRoute.addChildren([
	indexRoute,
	homeRoute,
	aboutRoute,
	contactRoute,
	loginRoute
])
const router = new Router({ routeTree })

declare module '@tanstack/router' {
	interface Register {
		router: typeof router
	}
}

function Root() {
	return (
		<>
			<Navbar />
			<Outlet />
		</>
	)
}

function App() {

	return (
		<AuthProvider>
			<ToastProvider>
				<RouterProvider router={router} />
				<ToastContainer />
			</ToastProvider>
		</AuthProvider>
	)
}

export default App
