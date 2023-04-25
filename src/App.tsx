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

const rootRoute = new RootRoute({
	component: Root
})

const indexRoute = new Route({
	getParentRoute: () => rootRoute,
	path: '/',
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

const routeTree = rootRoute.addChildren([indexRoute, aboutRoute, contactRoute])
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
	return <RouterProvider router={router} />
}

export default App
