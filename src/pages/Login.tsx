import SupabaseAuthUI from '../components/SupabaseAuthUI'
import { supabase } from '../config/supabaseClient'
import { useNavigate } from '@tanstack/router'
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

    if (session) {
      navigate({ to: '/home' })
    }
  }, [])

  /*
	
			
		*/

  return <SupabaseAuthUI />
}

export default Login
