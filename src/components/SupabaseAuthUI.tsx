import { Auth} from '@supabase/auth-ui-react'
import { supabase } from '../config/supabaseClient'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { useState } from 'react'

export default function SupabaseAuthUI(){

    const [view, setView] = useState()

    return (
    <main className="flex justify-center">
      <div className="rounded-lg border border-sky-400 bg-sky-900 p-8">
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
                  brandButtonText: '#0284c7',
                },
              },
            },
          }}
          theme="dark"
          providers={['github', 'google']}
          socialLayout="horizontal"
          magicLink={true}
        />
      </div>
    </main>
  )
}