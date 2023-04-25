import React from 'react'
import SectionTitle from './SectionTitle'

export default function Contact() {
	return (
		<div className='flex flex-col p-2'>
			<div className='flex flex-col justify-between items-center h-24 max-w-[1240px] mx-auto px-4'>
				<SectionTitle title={'Contact'} />
				<h3 className='text-sky-300'>Github link here</h3>
			</div>
		</div>
	)
}
