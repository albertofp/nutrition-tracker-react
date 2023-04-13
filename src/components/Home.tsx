import React, { useState } from 'react'
import Button from './Button'
import MacrosList from './MacrosList'
import SectionTitle from './SectionTitle'
import { foodVals } from '../../types'
import ManualInputForm from './ManualInputForm'

export default function Home() {
	const [dayTotal, setDayTotal] = useState({
		calories: 0,
		protein: 0,
		carbs: 0,
		fat: 0,
		fiber: 0
	})

	return (
		<div>
			<div className='text-white flex flex-col justify-between items-start h-24 max-w-[1240px] mx-auto px-4'>
				<h3 className='text-teal-500'>
					App to track and display your daily calorie and macro nutrient
					consumption.{' '}
				</h3>
			</div>

			<div className='flex justify-start gap-4 text-[#00df9a] max-w-[1240px] mx-auto px-4 items-center'>
				<SectionTitle title='Add Item' />
				<div className='flex gap-2'>
					<Button text='Search' />
					<Button text='Manual Input' />
				</div>
			</div>

			<div className='flex flex-col justify-evenly gap-4 text-[#00df9a] max-w-[1240px] mx-auto px-4'>
				<SectionTitle
					title='Daily Total'
					type='h3'
				></SectionTitle>
				<MacrosList
					calories={dayTotal.calories}
					protein={dayTotal.protein}
					fat={dayTotal.fat}
					carbs={dayTotal.carbs}
					fiber={dayTotal.fiber}
				/>
				<ManualInputForm />
			</div>
		</div>
	)
}
