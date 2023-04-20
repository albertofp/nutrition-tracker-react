import { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

const liStyle = 'p-4 cursor-pointer hover:bg-slate-900'

export default function Navbar({ setCurrentPage }: any) {
	const [nav, setNav] = useState(true)

	return (
		<nav className='text-white flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4'>
			<h1 className='w-full text-3xl font-bold text-sky-300'>
				Nutrition Tracker
			</h1>
			<ul className='hidden md:flex'>
				<li className={liStyle}>Home</li>
				<li className={liStyle}>About</li>
				<li className={liStyle}>Contact</li>
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
					<li className={liStyle + 'border-b border-gray-600'}>Home</li>
					<li className={liStyle + 'border-b border-gray-600'}>About</li>
					<li className={liStyle + 'border-b border-gray-600'}>Contact</li>
				</ul>
			</div>
		</nav>
	)
}
