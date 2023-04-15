import { foodItem } from '../../types'
import MacrosList from './MacrosList'

type Props = {
	results: Array<foodItem>
}

function ResultsDisplay({ results }: Props) {
	return (
		<div className='bg-teal-950 flex flex-col gap-2 rounded-lg m-2 p-2'>
			{results.map((item) => (
				<MacrosList
					name={item.name}
					calories={item.calories}
					protein={item.protein}
					carbs={item.carbs}
					fat={item.fat}
					fiber={item.fiber}
				/>
			))}
		</div>
	)
}

export default ResultsDisplay
