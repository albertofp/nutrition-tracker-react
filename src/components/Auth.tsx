import { useRef, useState } from 'react'
import { supabase } from '../config/supabaseClient'
import { Provider } from '@supabase/supabase-js'
import Button from './Button'
import { GithubIcon } from 'lucide-react'
import { Google } from '@mui/icons-material'
import { Text, Title } from '@mantine/core'

interface HelperState {
  error: null | boolean
  text: null | string
}

const Auth = () => {
  const [helperText, setHelperText] = useState<HelperState>({
    error: null,
    text: null,
  })
  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)

  const handleLogin = async (type: string) => {
    const email = emailRef.current?.value
    const password = passwordRef.current?.value

    const {
      data: { user },
      error,
    } =
      type === 'LOGIN'
        ? await supabase.auth.signInWithPassword({ email, password })
        : await supabase.auth.signUp({ email, password })

    if (error) {
      setHelperText({ error: true, text: error.message })
    } else if (!user && !error) {
      setHelperText({
        error: false,
        text: 'An email has been sent to you for verification!',
      })
    }
  }

  const handleOAuthLogin = async (provider: Provider) => {
    // You need to enable the third party auth you want in Authentication > Settings
    // Read more on: https://supabase.com/docs/guides/auth#third-party-logins
    let { error } = await supabase.auth.signInWithOAuth({ provider })
    if (error) console.log('Error: ', error.message)
  }

  const forgotPassword = async (e: { preventDefault: () => void }) => {
    // Read more on https://supabase.com/docs/reference/javascript/reset-password-email#notes
    e.preventDefault()
    const email = prompt('Please enter your email:')

    if (email === null || email === '') {
      setHelperText({ error: true, text: 'You must enter your email.' })
    } else {
      let { data, error } = await supabase.auth.resetPasswordForEmail(email)
      if (error) {
        console.error('Error: ', error.message)
      } else {
        setHelperText({
          error: false,
          text: 'Password recovery email has been sent.',
        })
      }
    }
  }

  return (
    <div
      className={
        'flex h-full w-full max-w-sm flex-col rounded-md bg-gradient-to-b from-sky-800 to-sky-950 p-5 text-base text-sky-300 shadow-lg sm:h-auto sm:w-2/5'
      }
    >
      <Title align="center" weight={'normal'}>
        {' '}
        Login{' '}
      </Title>
      <label className={'mb-2 mt-3 text-lg font-medium'} htmlFor={'email'}>
        <span className={'mr-1 font-mono text-red-400'}>*</span>Email:
      </label>
      <input
        className={'border bg-gray-100 px-3 py-1'}
        type={'email'}
        name={'email'}
        ref={emailRef}
        required
      />
      <label className={'mb-2 mt-3 text-lg font-medium'} htmlFor={'password'}>
        <span className={'mr-1 font-mono text-red-400'}>*</span>
        Password:
      </label>
      <input
        className={'border bg-gray-100 px-3 py-1'}
        type={'password'}
        name={'password'}
        ref={passwordRef}
        required
      />
      <span
        className={
          'mt-2 cursor-pointer self-end text-sm font-medium text-blue-600 hover:text-blue-400'
        }
        onClick={forgotPassword}
      >
        Forgot Password?
      </span>
      {!!helperText.text && (
        <div
          className={`my-2 border px-1 py-2 text-center text-sm ${
            helperText.error
              ? 'border-red-300 bg-red-100 text-red-400'
              : 'border-green-300 bg-green-100 text-green-500'
          }`}
        >
          {helperText.text}
        </div>
      )}
      <div className="mt-2 flex">
        <span className="mx-1.5 block w-full rounded-md shadow-sm">
          <button
            type="submit"
            onClick={() => handleLogin('REGISTER').catch(console.error)}
            className={
              'focus:shadow-outline-sky flex w-full justify-center rounded-md border-sky-600 border-transparent bg-sky-600 px-4 py-2 text-sm font-medium text-sky-50 transition duration-150 ease-in-out hover:bg-sky-500 focus:border-sky-700 active:bg-sky-700'
            }
          >
            Sign Up
          </button>
        </span>
        <span className="mx-1.5 block w-full rounded-md shadow-sm">
          <button
            onClick={() => handleLogin('LOGIN')}
            type="button"
            className="focus:shadow-outline-sky mx-auto flex w-full justify-center rounded-md border border-transparent bg-sky-600 px-4 py-2 text-sm font-medium text-sky-50 transition duration-150 ease-in-out hover:bg-sky-500 focus:border-sky-700 focus:outline-none active:bg-sky-700"
          >
            Sign In
          </button>
        </span>
      </div>
      <div className="mt-3">
        <div className="flex justify-center text-sm leading-5">
          <span className="bg-inherit px-2 text-sky-50">
            <Text weight={'lighter'} color="dimmed">
              Or continue with
            </Text>
          </span>
        </div>

        <div>
          <div className="mt-3">
            <span className="block rounded-md shadow-sm">
              <Button
                text="GitHub"
                className="focus:shadow-outline-sky mx-auto flex w-full items-center justify-center rounded-md border border-transparent bg-sky-600 px-4 py-2 text-sm font-medium text-sky-50 transition duration-150 ease-in-out hover:bg-sky-500 focus:border-sky-700 focus:outline-none active:bg-sky-700"
                icon={<GithubIcon />}
                onClick={() => handleOAuthLogin('github')}
              />
            </span>
          </div>
          <div className="mt-3">
            <span className="block rounded-md shadow-sm">
              <Button
                text="Google"
                className="focus:shadow-outline-sky mx-auto flex w-full items-center justify-center rounded-md border border-transparent bg-sky-600 px-4 py-2 text-sm font-medium text-sky-50 transition duration-150 ease-in-out hover:bg-sky-500 focus:border-sky-700 focus:outline-none active:bg-sky-700"
                icon={<Google />}
                onClick={() => handleOAuthLogin('google')}
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Auth
