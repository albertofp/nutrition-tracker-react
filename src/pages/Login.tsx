import { Auth as AuthUI } from '@supabase/auth-ui-react'
import { supabase } from '../config/supabaseClient'
import { useNavigate } from '@tanstack/router'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { useAuth } from '../hooks/useAuth'
import Auth from '../components/Auth'

type Props = {}

function Login() {
	const navigate = useNavigate()
	let { session, user } = useAuth()

	supabase.auth.onAuthStateChange(async (event) => {
		switch (event) {
			case 'SIGNED_IN':
				navigate({ to: '/home' })
				console.log('signed in session:', session)
				console.log('signed in user:', user)
			case 'SIGNED_OUT':
				navigate({ to: '/login' })
			default:
				break
		}
	})

	/*
	
			<AuthUI
				supabaseClient={supabase}
				appearance={{
					theme: ThemeSupa,
					variables: {
						default: {
							colors: {
								brand: '#082f49',
								defaultButtonBackground: '#082f49',
								defaultButtonBackgroundHover: '#075985',
								brandAccent: '#075985',
								defaultButtonBorder: '#155e75',
								brandButtonText: '#0284c7'
							}
						}
					}
				}}
				theme='dark'
				providers={['github', 'google']}
				socialLayout='horizontal'
			/>
		*/

	return (
		<div className='flex justify-center'>
			<Auth />
		</div>
	)
}

export default Login
