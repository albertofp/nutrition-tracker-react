import React from 'react'

type Props = {
	text: string
}

function Button({ text }: Props) {
	return (
		<button className='bg-transparent hover:bg-teal-950 text-teal-700 font-semibold hover:text-white py-2 px-4 border border-teal-800 hover:border-transparent rounded'>
			{text}
		</button>
	)
}

export default Button
