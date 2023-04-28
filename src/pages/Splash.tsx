import { Title } from '@mantine/core'
import Button from '../components/Button'
import { useAuth } from '../hooks/useAuth'

function Splash() {
	const { session, user } = useAuth()

	return (
		<div className='text-sky-300'>
			<Title align='center' weight={'normal'}>Splash Screen</Title>
			<br></br>
			<div className='flex items-center justify-center'>
				<Button
					text='log session'
					onClick={() => console.log(session)}
				/>
			</div>
		</div>
	)
}

export default Splash
