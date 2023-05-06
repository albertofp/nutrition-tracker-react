import { Title } from '@mantine/core'
import Button from '../components/Button'
import { useAuth } from '../hooks/useAuth'
import { supabase } from '../config/supabaseClient'
import { useNavigate } from '@tanstack/router'

function Splash() {
  const { session, user, signOut } = useAuth()
  const navigate = useNavigate()

  const logsession = async () => {
    const { data, error } = await supabase.auth.getSession()
    console.log(`Session: ${data.session}`)
  }

  return (
    <div className="text-sky-300">
      <Title align="center" weight={'normal'}>
        Splash Screen
      </Title>
      <br></br>
      <div className="flex flex-col items-center justify-center gap-2">
        <Button text="log session" onClick={() => logsession()} />
        <Button
          text="log user"
          onClick={() => console.log(`User: ${user?.id}`)}
        />
        <Button
          text="Log Out"
          onClick={() => {
            signOut()
          }}
        />
        <Title weight={'normal'}>User : {user?.email} </Title>
      </div>
    </div>
  )
}

export default Splash
