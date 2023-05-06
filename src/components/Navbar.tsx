import { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { Link } from '@tanstack/router'
import { Avatar, Title } from '@mantine/core'
import { useAuth } from '../hooks/useAuth'

const liStyle = 'p-4 cursor-pointer hover:bg-slate-900 rounded-lg min-w-fit '

export default function Navbar() {
  const [nav, setNav] = useState(true)
  const { user, signOut } = useAuth()

  return (
    <nav className="mx-auto mb-6 flex h-20 w-full items-center justify-between bg-gradient-to-b from-sky-800 to-sky-950 px-4 text-sky-300">
      <h1 className="w-full text-3xl font-bold">
        <Link to="/">Nutrition Tracker</Link>
      </h1>
      <ul className="hidden md:flex">
        <li className={liStyle}>
          <Link to="/home">Home</Link>
        </li>
        <li className={liStyle}>
          <Link to="/about">About</Link>
        </li>
        <li className={liStyle}>
          <Link to="/contact">Contact</Link>
        </li>
        <li className={liStyle}>
          <Link to="/login">Log in</Link>
        </li>
      </ul>
      <div
        onClick={() => {
          setNav(!nav)
        }}
        className="block cursor-pointer md:hidden"
      >
        {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <aside
        className={
          nav
            ? 'fixed left-[-100%]'
            : 'fixed left-0 top-0 h-full w-[60%] min-w-fit border-r border-r-sky-950 bg-zinc-900 duration-500 ease-in-out'
        }
      >
        <h1 className="m-4 w-full max-w-fit text-3xl font-bold text-sky-300 ">
          <Link to="/">Nutrition Tracker</Link>
        </h1>
        <ul className="p-4 uppercase">
          <li
            className={liStyle + 'w-full rounded-none border-b border-sky-300'}
          >
            <div className=" flex items-center justify-between gap-2">
              <Title size="h4" weight={'normal'}>
                {user?.user_metadata?.name}
              </Title>
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
          <li
            className={liStyle + 'w-full rounded-none border-b border-sky-300'}
          >
            <Link to="/login">Log in</Link>
          </li>
          <li
            className={liStyle + 'w-full rounded-none border-b border-sky-300'}
          >
            <Link to="/home">Home</Link>
          </li>
          <li className={liStyle + 'rounded-none border-b border-sky-300'}>
            <Link to="/about">About</Link>
          </li>
          <li className={liStyle + 'rounded-none border-b border-sky-300'}>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </aside>
    </nav>
  )
}
