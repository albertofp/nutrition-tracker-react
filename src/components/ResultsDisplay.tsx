import { foodItem } from '../../types'
import MacrosList from './MacrosList'

type Props = {
	results: Array<foodItem>
}

function ResultsDisplay({ results }: Props) {

	return (
		<div className='flex xs:flex-col md:flex-row gap-4 rounded-lg m-2 p-2'>
			{results.map((item) => (
				<div>
					<MacrosList
						name={item.name}
						controls={true}
						showName={true}
						calories={item.calories}
						protein={item.protein}
						carbs={item.carbs}
						fat={item.fat}
						fiber={item.fiber}
					/>
				</div>
			))}
		</div>
	)
}

export default ResultsDisplay
