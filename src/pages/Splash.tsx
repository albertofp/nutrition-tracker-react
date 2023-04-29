import { Title } from '@mantine/core'
import Button from '../components/Button'
import { useAuth } from '../hooks/useAuth'
import { supabase } from '../config/supabaseClient'
import { useNavigate } from '@tanstack/router'

function Splash() {
	const { session, user, signOut } = useAuth()
	const navigate = useNavigate()

	const logsession = async () => {
		const data = await supabase.auth.refreshSession()
		console.log('session: ', data.data.session)
	}

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
					onClick={() => logsession()}
				/>
				<Button
					text='log user'
					onClick={() => console.log('user: ', user)}
				/>
				<Button
					text='Log Out'
					onClick={() => {
						signOut()
						navigate({ to: '/login' })
					}}
				/>
				<Title weight={'normal'}>User ID: {user?.id}</Title>
			</div>
		</div>
	)
}

export default Splash
