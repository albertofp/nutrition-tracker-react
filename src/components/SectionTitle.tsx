import React from 'react'

type Props = {
	title: string
	type?: string
}

function SectionTitle({ title, type = 'h1' }: Props) {
	switch (type) {
		case 'h1':
			return <h1 className='w-full text-2xl text-[#00df9a]'>{title}</h1>
		case 'h2':
			return <h2 className='w-full text-2xl text-[#00df9a]'>{title}</h2>
		case 'h3':
			return <h3 className='w-full text-2xl text-[#00df9a]'>{title}</h3>
		case 'h4':
			return <h4 className='w-full text-2xl text-[#00df9a]'>{title}</h4>
		case 'h5':
			return <h5 className='w-full text-2xl text-[#00df9a]'>{title}</h5>
		case 'h6':
			return <h6 className='w-full text-2xl text-[#00df9a]'>{title}</h6>
		default:
			return (
				<h1 className='w-full text-2xl text-[#00df9a]'>Invalid Header Type</h1>
			)
	}
}

export default SectionTitle
