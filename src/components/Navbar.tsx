import { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { Link } from '@tanstack/router'

const liStyle = 'p-4 cursor-pointer hover:bg-slate-900 rounded-lg'

export default function Navbar() {
	const [nav, setNav] = useState(true)

	return (
		<nav className='flex justify-between items-center h-20 w-full mx-auto px-4 bg-sky-950 mb-6 text-sky-300'>
			<h1 className='w-full text-3xl font-bold'>Nutrition Tracker</h1>
			<ul className='hidden md:flex'>
				<li className={liStyle}>
					<Link to='/'>Home</Link>
				</li>
				<li className={liStyle}>
					<Link to='/about'>About</Link>
				</li>
				<li className={liStyle}>
					<Link to='/contact'>Contact</Link>
				</li>
			</ul>
			<div
				onClick={() => {
					setNav(!nav)
				}}
				className='block md:hidden cursor-pointer'
			>
				{!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
			</div>
			<div
				className={
					nav
						? 'fixed left-[-100%]'
						: 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-800 bg-gray-950 ease-in-out duration-500'
				}
			>
				<h1 className='w-full text-3xl font-bold text-sky-300 m-4'>
					Nutrition Tracker
				</h1>
				<ul className='p-4 uppercase'>
					<li className={liStyle + 'border-b border-gray-600'}>
						<Link to='/'>Home</Link>
					</li>
					<li className={liStyle + 'border-b border-gray-600'}>
						<Link to='/about'>About</Link>
					</li>
					<li className={liStyle + 'border-b border-gray-600'}>
						<Link to='/contact'>Contact</Link>
					</li>
				</ul>
			</div>
		</nav>
	)
}
