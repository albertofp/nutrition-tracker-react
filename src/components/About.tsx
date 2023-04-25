import SectionTitle from './SectionTitle'
import SupabaseIcon from '../assets/supabase-icon.svg'
import TypeScriptIcon from '../assets/typescript-logo.svg'
import ReactIcon from '../assets/react.svg'
import TailwindIcon from '../assets/tailwindcss-icon.svg'
import ViteIcon from '../assets/vite-logo.svg'

function About() {
	return (
		<div className='flex flex-col p-2'>
			<div className='flex flex-col justify-between items-center gap-4 h-24 max-w-[1240px] mx-auto px-4'>
				<SectionTitle title={'About'} />
				<h3 className='text-sky-300'>
					App to track and display your daily calorie and macro nutrient
					consumption. Developed by Alberto F. Pluecker as a learning project on
					React, Typescript, Tailwind and Supabase.
				</h3>
				<div className='flex gap-4'>
					<img
						src={ReactIcon}
						className='w-14'
					/>
					<img
						src={ViteIcon}
						className='w-14'
					/>
					<img
						src={TypeScriptIcon}
						className='w-14'
					/>
					<img
						src={TailwindIcon}
						className='w-14'
					/>
					<img
						src={SupabaseIcon}
						className='w-14'
					/>
				</div>
			</div>
		</div>
	)
}

export default About
