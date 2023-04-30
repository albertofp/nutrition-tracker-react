import { Title } from '@mantine/core'
import { foodItemDB } from '../../types/types'
import MacrosList from './MacrosList'

type Props = {
	results: foodItemDB[] | null
}

function ResultsDisplay({ results }: Props) {
	return (
		<div className='flex flex-col md:flex-row gap-4 md:max-w-[850px] flex-wrap m-2 p-2 justify-center'>
			{results!.length <= 0 ? (
				<Title
					order={2}
					weight={'normal'}
				>
					No results found
				</Title>
			) : (
				results!.map((item) => (
					<div key={item.id}>
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
