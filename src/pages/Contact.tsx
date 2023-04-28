import GithubIcon from '../assets/github-icon.svg'
import LinkedInIcon from '../assets/linkedin-icon.svg'
import { Title } from '@mantine/core'

export default function Contact() {
	return (
		<div className='flex flex-col gap-6 text-sky-300'>
			<Title
				align='center'
				weight='normal'
			>
				Contact
			</Title>
			<div className='flex flex-col md:flex-row md:justify-between gap-4 justify-between items-center h-24 max-w-[1240px] mx-auto px-4'>
				<a
					href='https://github.com/albertofp'
					className='flex gap-4 items-center bg-gradient-to-b from-sky-800 to-sky-950 rounded-md p-2'
				>
					<img
						src={GithubIcon}
						alt='github icon'
						className='w-12'
					/>
					<Title
						order={4}
						weight='normal'
					>
						albertofp
					</Title>
				</a>

				<a
					href='https://www.linkedin.com/in/alberto-pluecker/'
					className='flex gap-4 items-center bg-gradient-to-b from-sky-800 to-sky-950 rounded-md p-2'
				>
					<img
						src={LinkedInIcon}
						alt='github icon'
						className='w-12'
					/>
					<Title
						order={4}
						weight='normal'
					>
						Alberto F. Pluecker
					</Title>
				</a>
			</div>
		</div>
	)
}
