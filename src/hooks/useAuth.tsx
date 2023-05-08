import { Session, User } from '@supabase/supabase-js'
import { useContext, useState, useEffect, createContext } from 'react'
import { supabase } from '../config/supabaseClient'
import { useNavigate } from '@tanstack/router'

const AuthContext = createContext<{
  session: Session | null | undefined
  user: User | null | undefined
  signOut: () => void
}>({ session: null, user: null, signOut: () => {} })

export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState<User | null | undefined>(null)
  const [session, setSession] = useState<Session | null>()
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    const setData = async () => {
      const {
        data: { session },
        error,
      } = await supabase.auth.getSession()
      if (error) {
        console.log(`Error getting session: ${error?.message}`)
        throw error
      }
      setSession(session)
      setUser(session?.user ?? null)
      setLoading(false)
    }

    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        console.log(`Supabase auth event: ${_event}`)
        setSession(session)
        setUser(session?.user ?? null)
        setLoading(false)
        if (_event === 'SIGNED_IN') {
          navigate({ to: '/home' })
        }
        if (_event === 'SIGNED_OUT') {
          navigate({ to: '/login' })
        }
      }
    )

    setData()

    return () => {
      listener?.subscription.unsubscribe()
    }
  }, [])

  const value = {
    session,
    user,
    signOut: () => supabase.auth.signOut(),
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(AuthContext)
}
