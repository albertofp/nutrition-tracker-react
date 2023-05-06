import Navbar from './components/Navbar'
import './input.css'
import Home from './pages/Home'
import {
  Outlet,
  RouterProvider,
  Router,
  Route,
  RootRoute,
} from '@tanstack/router'
import About from './pages/About'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Splash from './pages/Splash'

const rootRoute = new RootRoute({
  component: Root,
})

const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Splash,
})

const loginRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/login',
  component: Login,
})

const homeRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/home',
  component: Home,
})

const aboutRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: About,
})

const contactRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/contact',
  component: Contact,
})

const routeTree = rootRoute.addChildren([
  indexRoute,
  homeRoute,
  aboutRoute,
  contactRoute,
  loginRoute,
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
  return <RouterProvider router={router} />
}

export default App
