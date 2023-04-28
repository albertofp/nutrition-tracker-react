import SupabaseIcon from '../assets/supabase-icon.svg'
import TypeScriptIcon from '../assets/typescript-logo.svg'
import ReactIcon from '../assets/react.svg'
import TailwindIcon from '../assets/tailwindcss-icon.svg'
import ViteIcon from '../assets/vite-logo.svg'
import {Paper,Text, Title} from '@mantine/core'

function About() {
	return (
		<div className='flex flex-col p-2'>
			<div className='flex flex-col justify-between items-center gap-4 h-24 max-w-[1240px] mx-auto px-4'>
				<Title align='center'>About</Title>
				<Text className='text-sky-300 max-w-[420px] text-xl text-justify'>
					App to track and display your daily calorie and macro nutrient
					consumption. Developed by Alberto F. Pluecker as a learning project on
					React, Typescript, Tailwind and Supabase.
				</Text>
				<div className='flex gap-4 items-center'>
					<a href='https://react.dev/'>
						<img
							src={ReactIcon}
							className='w-14 hover:scale-125 ease-in duration-200'
						/>
					</a>
					<a href='https://vitejs.dev/'>
						<img
							src={ViteIcon}
							className='w-14 hover:scale-125 ease-in duration-200'
						/>
					</a>
					<a href='https://www.typescriptlang.org/'>
						<img
							src={TypeScriptIcon}
							className='w-14 hover:scale-125 ease-in duration-200'
						/>
					</a>
					<a href='https://tailwindcss.com/'>
						<img
							src={TailwindIcon}
							className='w-16 hover:scale-125 ease-in duration-200'
						/>
					</a>
					<a href='https://supabase.com/'>
						<img
							src={SupabaseIcon}
							className='w-14 hover:scale-125 ease-in duration-200'
						/>
					</a>
				</div>
			</div>
		</div>
	)
}

export default About
