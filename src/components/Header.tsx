import React from 'react'
import homeIcon from '../assets/home-icon.svg'
import profileIcon from '../assets/profile-icon.svg'
import settingsIcon from '../assets/settings-icon.svg'
import logoutIcon from '../assets/logout-icon.svg'

function Header() {
	return (
		<header className='navbar'>
			<div className='nav-item'>Home</div>
			<div className='nav-item'>Profile</div>
			<div className='nav-item'>Settings</div>
			<div className='nav-item'>Logout</div>

			<img
				className='nav-item-icon'
				src={homeIcon}
				alt='Home'
			></img>
			<img
				className='nav-item-icon'
				src={profileIcon}
				alt='Profile'
			></img>
			<img
				className='nav-item-icon'
				src={settingsIcon}
				alt='Settings'
			></img>
			<img
				className='nav-item-icon'
				src={logoutIcon}
				alt='Logout'
			></img>
		</header>
	)
}

export default Header
