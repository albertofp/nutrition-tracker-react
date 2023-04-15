import { ReactJSXElement } from '@emotion/react/types/jsx-namespace'
import SectionTitle from './SectionTitle'

type Props = {
	name?: string
	calories: number
	protein: number
	carbs: number
	fat: number
	fiber: number
}

function MacrosList({
	name,
	calories,
	protein,
	carbs,
	fat,
	fiber
}: Props): ReactJSXElement {
	return (
		<div>
			<div className='flex flex-col items-center'>{name && <SectionTitle title={name} />}</div>
			<ul className='bg-teal-950 flex flex-col gap-2 rounded-lg m-2 p-4 items-start max-w-xs'>
				<li className='flex justify-between w-full border-b border-teal-700 p-1'>
					<span>Calories: </span>
					<span>{calories}g</span>
				</li>
				<li className='flex justify-between w-full border-b border-teal-700 p-1'>
					<span>Protein: </span>
					<span>{protein}g</span>
				</li>
				<li className='flex justify-between w-full border-b border-teal-700 p-1'>
					<span>Carbs: </span>
					<span>{carbs}g</span>
				</li>
				<li className='flex justify-between w-full border-b border-teal-700 p-1'>
					<span>Fat: </span>
					<span>{fat}g</span>
				</li>
				<li className='flex justify-between w-full p-1 '>
					<span>Fiber: </span>
					<span>{fiber}g</span>
				</li>
			</ul>
		</div>
	)
}

export default MacrosList
