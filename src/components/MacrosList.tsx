import { ReactJSXElement } from '@emotion/react/types/jsx-namespace'
import React from 'react'

import { foodVals } from '../../types'

/*calories: number
	protein: number
	carbs: number
	fat: number
	fiber: number*/

function MacrosList(nutrients: foodVals): ReactJSXElement {
	return (
		<>
			<ul className='bg-teal-950 flex flex-col gap-2 rounded-lg m-2 p-4 items-start max-w-xs'>
				<li className='flex justify-between w-full border-b border-teal-700 p-1'>
					<span>Calories: </span>
					<span>{nutrients.calories}g</span>
				</li>
				<li className='flex justify-between w-full border-b border-teal-700 p-1'>
					<span>Protein: </span>
					<span>{nutrients.protein}g</span>
				</li>
				<li className='flex justify-between w-full border-b border-teal-700 p-1'>
					<span>Carbs: </span>
					<span>{nutrients.carbs}g</span>
				</li>
				<li className='flex justify-between w-full border-b border-teal-700 p-1'>
					<span>Fat: </span>
					<span>{nutrients.fat}g</span>
				</li>
				<li className='flex justify-between w-full p-1 '>
					<span>Fiber: </span>
					<span>{nutrients.fiber}g</span>
				</li>
			</ul>
			{console.log(nutrients)}
		</>
	)
}

export default MacrosList
