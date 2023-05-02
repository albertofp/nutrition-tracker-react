import { Title, rem } from '@mantine/core'
import { foodItem } from '../../types/types'
import MacrosList from './MacrosList'
import { Carousel } from '@mantine/carousel'
import { useMediaQuery } from '@mantine/hooks'

type Props = {
	results: foodItem[] | null
}
function ResultsDisplay({ results }: Props) {
	const mobile = useMediaQuery(`(max-width: 768px)`)
	return (
		<div className='flex flex-col md:flex-row gap-4 md:max-w-[850px] flex-wrap-2 justify-center'>
			{results!.length <= 0 ? (
				<Title
					order={2}
					weight={'normal'}
				>
					No results found
				</Title>
			) : (
				<Carousel
					slideSize='50%'
					breakpoints={[{ maxWidth: 'sm', slideSize: '20%', slideGap: rem(8) }]}
					slideGap='sm'
					align='start'
					orientation={mobile ? 'vertical' : 'horizontal'}
					withControls={false}
					className='max-w-5xl'
				>
					{results!.map((item) => (
						<Carousel.Slide
							key={item.id}
							size={20}
							gap={10}
						>
							<MacrosList
								item={item}
								controls={true}
								showImg={true}
							/>
						</Carousel.Slide>
					))}
				</Carousel>
			)}
		</div>
	)
}

export default ResultsDisplay
