import { ReactJSXElement } from '@emotion/react/types/jsx-namespace'
import { useContext } from 'react'
import { DayContext } from '../DayContext'
import { mergeObjects } from '../utils/mergeObjects'
import { delItem, updateItem } from '../utils/useDatabase'
import Button from './Button'
import { CheckCircle2, Edit, Plus, X } from 'lucide-react'
import { Title } from '@mantine/core'
import { foodItem } from '../../types/types'
import { notifications } from '@mantine/notifications'

interface Props {
	item: foodItem
	controls?: boolean
	title?: string
	showImg?: boolean
}

function MacrosList({
	item,
	controls,
	title,
	showImg
}: Props): ReactJSXElement {
	const { dayTotal, setDayTotal } = useContext(DayContext)

	const addMacrosToDaily = () => {
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

	const editEntry = () => {
		alert('Edit entry')
	}

	const liStyle = 'flex justify-between w-full p-1 text-sky-300 '

	return (
		<div className='shadow-lg bg-gradient-to-br from-sky-900 to-sky-950 flex flex-col rounded-md'>
			<div className='flex flex-col mt-2'>
				<Title
					order={2}
					align='center'
					weight='normal'
					transform='capitalize'
				>
					{title ? title : item.name}
				</Title>
				{showImg && (
					<img
						src={item.img}
						className='mx-0 w-full h-auto max-h-28 object-cover'
						alt={`Picture of ${item.name} by ${item.imgAuthor}`}
						title={`Picture by ${item.imgAuthor}`}
					></img>
				)}
			</div>
			<ul className=' rounded-lg m-2 p-4 items-start min-w-[250px]'>
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
					<div className='flex flex-col gap-1'>
						<div className='flex justify-evenly gap-1'>
							<Button
								text='Delete'
								onClick={deleteEntry}
								aria-label='delete-button'
								icon={<X />}
							/>
							<Button
								text='Edit'
								onClick={editEntry}
								aria-label='edit-button'
								icon={<Edit />}
							/>
						</div>
						<Button
							text='Add'
							onClick={addMacrosToDaily}
							aria-label='add-button'
							icon={<Plus />}
						/>
					</div>
				)}
			</ul>
		</div>
	)
}

export default MacrosList
