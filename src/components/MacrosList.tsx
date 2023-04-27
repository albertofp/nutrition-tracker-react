import { ReactJSXElement } from '@emotion/react/types/jsx-namespace'
import { useContext } from 'react'
import { DayContext } from '../DayContext'
import { mergeObjects } from '../utils/mergeObjects'
import { delItem } from '../utils/useDatabase'
import Button from './Button'
import SectionTitle from './SectionTitle'
import { useToast } from './Toast/useToast'

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

	const toast = useToast()
	const addMacros = () => {
		const newItem = mergeObjects(
			{ name, calories, protein, carbs, fat, fiber },
			dayTotal
		)
		setDayTotal(newItem)
		toast('success', 'Added macros to daily total')
	}

	const deleteEntry = () => {
		if (name) {
			delItem(name)
			toast('success', 'Deleted item from database')
		}
	}

	const liStyle = 'flex justify-between w-full p-1 text-sky-300 '

	return (
		<div className='bg-gradient-to-br from-sky-900 to-sky-950 flex flex-col gap-2 rounded-lg items'>
			<ul className=' rounded-lg m-2 p-4 items-start min-w-[250px]'>
				{name && showName && <SectionTitle title={name} />}

				<li className={liStyle + 'border-b border-sky-300'}>
					<span>Calories: </span>
					<span>{calories}g</span>
				</li>
				<li className={liStyle + 'border-b border-sky-300'}>
					<span>Protein: </span>
					<span>{protein}g</span>
				</li>
				<li className={liStyle + 'border-b border-sky-300'}>
					<span>Carbs: </span>
					<span>{carbs}g</span>
				</li>
				<li className={liStyle + 'border-b border-sky-300'}>
					<span>Fat: </span>
					<span>{fat}g</span>
				</li>
				<li className={liStyle}>
					<span>Fiber: </span>
					<span>{fiber}g</span>
				</li>

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
			</ul>
		</div>
	)
}

export default MacrosList
