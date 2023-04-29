import { Title } from '@mantine/core'
import Button from '../components/Button'
import { useAuth } from '../hooks/useAuth'

function Splash() {
	const { session, user, signOut } = useAuth()

	return (
		<div className='text-sky-300'>
			<Title
				align='center'
				weight={'normal'}
			>
				Splash Screen
			</Title>
			<br></br>
			<div className='flex flex-col gap-2 items-center justify-center'>
				<Button
					text='log session'
					onClick={() => console.log('session: ', session)}
				/>
				<Button
					text='log user'
					onClick={() => console.log('user: ', user)}
				/>
				<Button
					text='Log Out'
					onClick={() => signOut()}
				/>
				<Title weight={'normal'}>User ID: {user?.id}</Title>
			</div>
		</div>
	)
}

export default Splash
