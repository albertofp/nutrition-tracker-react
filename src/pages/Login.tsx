import { Auth as AuthUI } from '@supabase/auth-ui-react'
import { supabase } from '../config/supabaseClient'
import { useNavigate } from '@tanstack/router'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { useAuth } from '../hooks/useAuth'
import Auth from '../components/Auth'
import { Session } from '@supabase/supabase-js'
import { useState, useEffect } from 'react'

function Login() {
  const [session, setSession] = useState<Session | null>()
  const navigate = useNavigate()
  //let { session, user } = useAuth()

  supabase.auth.onAuthStateChange((event) => {
    switch (event) {
      case 'SIGNED_IN':
        navigate({ to: '/home' })
      case 'SIGNED_OUT':
        navigate({ to: '/login' })
      default:
        break
    }
  })

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      console.log(`Session: ${session}`)
      setSession(session)
    })

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })

    if(session){
      navigate({ to: '/home' })
    }
  }, [])

  /*
	
			
		*/

  return (
    <div className="flex justify-center">
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
                brandButtonText: '#0284c7',
              },
            },
          },
        }}
        theme="dark"
        providers={['github', 'google']}
        socialLayout="horizontal"
      />
    </div>
  )
}

export default Login
