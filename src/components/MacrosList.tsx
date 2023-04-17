import { ReactJSXElement } from '@emotion/react/types/jsx-namespace'
import { useContext } from 'react'
import { DayContext } from '../DayContext'
import { mergeObjects } from '../mergeObjects'
import { delItem } from '../useDatabase'
import Button from './Button'
import SectionTitle from './SectionTitle'

type Props = {
	name: string
	showName?: boolean
	controls?: boolean
	calories: number
	protein: number
	carbs: number
	fat: number
	fiber: number
}

function MacrosList({
	name,
	showName,
	controls,
	calories,
	protein,
	carbs,
	fat,
	fiber
}: Props): ReactJSXElement {
	const { dayTotal, setDayTotal } = useContext(DayContext)

	const addMacros = () => {
		const newItem = mergeObjects(
			{ name, calories, protein, carbs, fat, fiber },
			dayTotal
		)
		setDayTotal(newItem)
	}

	const deleteEntry = () => {
		if (name) {
			delItem(name)
		}
	}

	const liStyle = 'flex justify-between w-full p-1 '

	return (
		<>
			<div className='flex flex-col items-center'>
				{name && showName && <SectionTitle title={name} />}
			</div>
			<ul className='bg-teal-950 flex flex-col gap-2 rounded-lg m-2 p-4 items-start min-w-[250px]'>
				<li className={liStyle + 'border-b border-teal-700'}>
					<span>Calories: </span>
					<span>{calories}g</span>
				</li>
				<li className={liStyle + 'border-b border-teal-700'}>
					<span>Protein: </span>
					<span>{protein}g</span>
				</li>
				<li className={liStyle + 'border-b border-teal-700'}>
					<span>Carbs: </span>
					<span>{carbs}g</span>
				</li>
				<li className={liStyle + 'border-b border-teal-700'}>
					<span>Fat: </span>
					<span>{fat}g</span>
				</li>
				<li className={liStyle}>
					<span>Fiber: </span>
					<span>{fiber}g</span>
				</li>
			</ul>
			{controls && (
				<div className='flex justify-evenly'>
					<Button
						text='Add'
						onClick={addMacros}
					/>
					<Button
						text='Delete'
						onClick={deleteEntry}
					/>
				</div>
			)}
		</>
	)
}

export default MacrosList
