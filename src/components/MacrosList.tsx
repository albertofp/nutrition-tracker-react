import { ReactJSXElement } from '@emotion/react/types/jsx-namespace'
import { useContext } from 'react'
import { DayContext } from '../DayContext'
import { mergeObjects } from '../utils/mergeObjects'
import { delItem } from '../utils/useDatabase'
import Button from './Button'
import { CheckCircle2, Plus, X } from 'lucide-react'
import { Title } from '@mantine/core'
import { foodItem } from '../../types/types'
import { notifications } from '@mantine/notifications'

interface Props {
	item: foodItem
	controls?: boolean
	title?: string
}

function MacrosList({ item, controls, title }: Props): ReactJSXElement {
	const { dayTotal, setDayTotal } = useContext(DayContext)

	const addMacros = () => {
		const newItem = mergeObjects(item, dayTotal)
		setDayTotal(newItem)
		notifications.show({
			message: 'Added to daily totals!',
			color: 'green',
			autoClose: 1000,
			icon: <CheckCircle2 />,
			sx: { backgroundColor: 'lightgreen' }
		})
	}

	const deleteEntry = () => {
		if (item.name) {
			delItem(item.name)
			notifications.show({
				message: 'Deleted item from database',
				color: 'green',
				autoClose: 1000,
				icon: <CheckCircle2 />,
				sx: { backgroundColor: 'lightgreen' }
			})
		}
	}

	const liStyle = 'flex justify-between w-full p-1 text-sky-300 '

	return (
		<div className='bg-gradient-to-br from-sky-900 to-sky-950 flex flex-col gap-2 rounded-lg items'>
			<ul className=' rounded-lg m-2 p-4 items-start min-w-[250px]'>
				{item.name && (
					<Title
						order={2}
						align='center'
						weight='normal'
						transform='capitalize'
					>
						{item.name}
					</Title>
				)}

				{title && (
					<Title
						order={2}
						align='center'
						weight='normal'
						transform='capitalize'
					>
						{title}
					</Title>
				)}

				<li className={liStyle + 'border-b border-sky-300'}>
					<span>Calories: </span>
					<span>{item.calories}g</span>
				</li>
				<li className={liStyle + 'border-b border-sky-300'}>
					<span>Protein: </span>
					<span>{item.protein}g</span>
				</li>
				<li className={liStyle + 'border-b border-sky-300'}>
					<span>Carbs: </span>
					<span>{item.carbs}g</span>
				</li>
				<li className={liStyle + 'border-b border-sky-300'}>
					<span>Fat: </span>
					<span>{item.fat}g</span>
				</li>
				<li className={liStyle}>
					<span>Fiber: </span>
					<span>{item.fiber}g</span>
				</li>

				{controls && (
					<div className='flex justify-evenly'>
						<Button
							text='Add'
							onClick={addMacros}
							icon={<Plus />}
						/>
						<Button
							text='Delete'
							onClick={deleteEntry}
							icon={<X />}
						/>
					</div>
				)}
			</ul>
		</div>
	)
}

export default MacrosList
