import { Title } from '@mantine/core'
import { foodItem } from '../../types/types'
import MacrosList from './MacrosList'

type Props = {
	results: foodItem[]
}

function ResultsDisplay({ results }: Props) {
	return (
		<div className='flex flex-col md:flex-row gap-4 md:max-w-[850px] flex-wrap rounded-lg m-2 p-2'>
			{results.length <= 0 ? (
				<Title
					order={2}
					weight={'normal'}
				>
					No results found
				</Title>
			) : (
				results.map((item) => (
					<div>
						<MacrosList
							item={item}
							controls={true}
							showImg={true}
						/>
					</div>
				))
			)}
		</div>
	)
}

export default ResultsDisplay
