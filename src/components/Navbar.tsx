import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

export default function Navbar() {
	const [nav, setNav] = useState(false)

	const showNav = () => {
		setNav(!nav)
	}

	return (
		<div className='text-white flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4'>
			<h1 className='w-full text-3xl font-bold text-[#00df9a]'>
				Nutrition Tracker
			</h1>
			<ul className='hidden md:flex'>
				<li className='p-4 cursor-pointer hover:bg-slate-900'>Home</li>
				<li className='p-4 cursor-pointer hover:bg-slate-900'>About</li>
				<li className='p-4 cursor-pointer hover:bg-slate-900'>Contact</li>
			</ul>
			<div
				onClick={showNav}
				className='block md:hidden'
			>
				{!nav ? (
					<AiOutlineClose
						size={20}
						className='cursor-pointer'
					/>
				) : (
					<AiOutlineMenu
						className='cursor-pointer'
						size={20}
					/>
				)}
			</div>
			<div
				className={
					nav
						? 'fixed left-[-100%]'
						: 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-800 bg-[#000300] ease-in-out duration-500'
				}
			>
				<h1 className='w-full text-3xl font-bold text-[#00df9a] p-4'>
					Nutrition Tracker
				</h1>
				<ul className='uppercase p-4'>
					<li className='p-4 cursor-pointer border-b border-gray-600 hover:bg-slate-900'>
						Home
					</li>
					<li className='p-4 cursor-pointer border-b border-gray-600 hover:bg-slate-900'>
						About
					</li>
					<li className='p-4 cursor-pointer border-b border-gray-600 hover:bg-slate-900'>
						Contact
					</li>
				</ul>
			</div>
		</div>
	)
}
