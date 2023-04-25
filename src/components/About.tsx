import SectionTitle from './SectionTitle'

type Props = {}

function About({}: Props) {
	return (
		<div className='flex flex-col p-2'>
			<div className='flex flex-col justify-between items-center h-24 max-w-[1240px] mx-auto px-4'>
				<SectionTitle title={'About'} />
				<h3 className='text-sky-300'>
					App to track and display your daily calorie and macro nutrient
					consumption. Developed by Alberto F. Pluecker as a learning project on
					React, Typescript, Tailwind and Supabase.{' '}
				</h3>
			</div>
		</div>
	)
}

export default About
