import SectionTitle from '../components/SectionTitle'

import Button from '../components/Button'

import { useAuth } from '../hooks/useAuth'

function Splash() {
	const { session, user } = useAuth()

	return (
		<>
			<SectionTitle title='Splash Screen' />
			<br></br>
			<SectionTitle title={'User: ' + user} />
			<br></br>
			<div className='flex items-center justify-center'>
				<Button
					text='log session'
					onClick={() => console.log(session)}
				/>
			</div>
		</>
	)
}

export default Splash
