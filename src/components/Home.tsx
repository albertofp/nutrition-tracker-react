import React from 'react'
import SectionTitle from './SectionTitle'

type Props = {}

export default function Home() {
  return (
		<div className='text-white flex flex-col justify-between items-center h-24 max-w-[1240px] mx-auto px-4'>
			<SectionTitle
				title='Home'
				type='h1'
			/>
		</div>
	)
}