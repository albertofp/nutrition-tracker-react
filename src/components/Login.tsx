import { Auth } from '@supabase/auth-ui-react'
import { supabase } from '../config/supabaseClient'
import { useNavigate } from '@tanstack/router'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { useContext, useEffect, useState } from 'react'
import { Session } from '@supabase/supabase-js'
import Button from './Button'

type Props = {}

function Login() {
	const navigate = useNavigate()

	supabase.auth.onAuthStateChange(async (event) => {
		switch (event) {
			case 'SIGNED_IN':
				navigate({ to: '/home' })
			case 'SIGNED_OUT':
				navigate({ to: '/login' })
			default:
				break
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
				showLinks={true}
				onlyThirdPartyProviders={false}
			/>
		</div>
	)
}

export default Login
