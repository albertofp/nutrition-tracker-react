import { useState } from 'react'
import { Link } from '@tanstack/router'
import { Avatar, Text, Burger, Divider } from '@mantine/core'
import { useAuth } from '../hooks/useAuth'
import { SeparatorVertical } from 'lucide-react'

export default function Navbar() {
  const { user, signOut, session } = useAuth()
  const [nav, setNav] = useState(true)

  return (
    <nav className="mb-6 flex h-20 w-full items-center justify-between bg-gradient-to-b from-sky-800 to-sky-950 px-4 text-sky-300">
      <h1 className="w-full text-3xl font-bold">
        <Link to="/">Nutrition Tracker</Link>
      </h1>
      <ul className="hidden p-4 md:flex">
        <div className=" flex max-w-xs items-center justify-between gap-2">
          <Text weight={'lighter'} truncate size={'sm'}>
            {user?.user_metadata?.name ? user?.user_metadata.name : user?.email}
          </Text>
          {session ? (
            <Divider
              orientation="vertical"
              color="rgb(125 211 252 / var(--tw-text-opacity))"
              size="sm"
            />
          ) : null}
        </div>
        <li className="min-w-fit cursor-pointer rounded-lg p-4 hover:bg-slate-900">
          <Link id="home" to="/home">
            Home
          </Link>
        </li>
        <li
          id="about"
          className="min-w-fit cursor-pointer rounded-lg p-4 hover:bg-slate-900"
        >
          <Link to="/about">About</Link>
        </li>
        <li
          id="contact"
          className="min-w-fit cursor-pointer rounded-lg p-4 hover:bg-slate-900"
        >
          <Link to="/contact">Contact</Link>
        </li>
        <UserControlsTop />
      </ul>
      <Burger
        opened={!nav}
        onClick={() => {
          setNav(!nav)
        }}
        color="rgb(125 211 252 / var(--tw-text-opacity))"
        className="md:hidden"
      />
      <aside
        className={
          nav
            ? 'fixed left-[-100%] z-[99]'
            : 'fixed left-0 top-0 z-[99] h-full w-[60%] min-w-fit max-w-[60%] border-r border-r-sky-950 bg-zinc-900 duration-500 ease-in-out'
        }
      >
        <h1 className="m-4 w-full max-w-fit text-3xl font-bold text-sky-300 ">
          <Link to="/">Nutrition Tracker</Link>
        </h1>
        <ul className="p-4 uppercase">
          {session ? (
            <li className="w-full min-w-fit cursor-pointer rounded-none border-b border-sky-300 p-4 hover:bg-slate-900">
              <div className=" flex max-w-xs items-center justify-between gap-2">
                <Text weight={'lighter'} truncate size={'sm'}>
                  {user?.user_metadata?.name
                    ? user?.user_metadata.name
                    : user?.email}
                </Text>
                <Avatar
                  radius={'xl'}
                  size={36}
                  variant="light"
                  src={user?.user_metadata?.image}
                  alt={user?.user_metadata?.name}
                  //children={user.initials}
                />
              </div>
            </li>
          ) : null}
          <UserControlsAside />
          <li className="w-full min-w-fit cursor-pointer rounded-none border-b border-sky-300 p-4 hover:bg-slate-900">
            <Link to="/home">Home</Link>
          </li>
          <li className="w-full min-w-fit cursor-pointer rounded-none border-b border-sky-300 p-4 hover:bg-slate-900">
            <Link to="/about">About</Link>
          </li>
          <li className="w-full min-w-fit cursor-pointer rounded-none border-b border-sky-300 p-4 hover:bg-slate-900">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </aside>
    </nav>
  )
}

function UserControlsAside() {
  const { signOut, session } = useAuth()
  if (session) {
    return (
      <li
        className="w-full min-w-fit cursor-pointer rounded-none border-b border-sky-300 p-4 hover:bg-slate-900"
        onClick={signOut}
      >
        Log out
      </li>
    )
  } else
    return (
      <li className="w-full min-w-fit cursor-pointer rounded-none border-b border-sky-300 p-4 hover:bg-slate-900">
        <Link to="/login">Log in</Link>
      </li>
    )
}

function UserControlsTop() {
  const { signOut, session } = useAuth()
  if (session) {
    return (
      <li
        id="logout"
        className="min-w-fit cursor-pointer rounded-lg p-4 hover:bg-slate-900"
        onClick={signOut}
      >
        Log out
      </li>
    )
  } else
    return (
      <li
        id="login"
        className="min-w-fit cursor-pointer rounded-lg p-4 hover:bg-slate-900"
      >
        <Link to="/login">Log in</Link>
      </li>
    )
}
