import { Auth } from '@supabase/auth-ui-react'
import { supabase } from '../supabaseClient'
import { useNavigate } from '@tanstack/router'
import { ThemeSupa } from '@supabase/auth-ui-shared'

type Props = {}

function Login() {
	const navigate = useNavigate()

	supabase.auth.onAuthStateChange(async (event) => {
		if (event !== 'SIGNED_OUT') {
			navigate({ to: '/home' })
		} else {
			navigate({ to: '/' })
		}
	})

	return (
		<div className='flex justify-center'>
			<Auth
				supabaseClient={supabase}
				appearance={{
					theme: ThemeSupa,
					variables: {
						default: {
							colors: {
								defaultButtonBackground: '#082f49',
								defaultButtonBackgroundHover: '#38bdf8',
								brandAccent: '#0ea5e9',
								defaultButtonBorder: '#155e75',
								brandButtonText: '#0284c7'
							}
						}
					}
				}}
				theme='dark'
				providers={['github']}
			/>
		</div>
	)
}

export default Login
