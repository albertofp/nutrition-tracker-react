import { useEffect, useRef, useState } from 'react'
import { supabase } from '../config/supabaseClient'
import { EmailOtpType, Provider } from '@supabase/supabase-js'
import Button from './Button'
import { AtSign, GithubIcon, Lock } from 'lucide-react'
import { Google } from '@mui/icons-material'
import { Text, Title, Input, PasswordInput, TextInput } from '@mantine/core'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const Auth = () => {
  const schema = z.object({
    email: z.string().email(),
  })

  type FormData = z.infer<typeof schema>

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: '',
    },
  })

  async function signInWithEmail(email: string) {
    const { error } = await supabase.auth.signInWithOtp({
      email: email,
      options: {
        emailRedirectTo: 'albertofp.github.io/nutrition-tracker-react/home',
      },
    })
    console.log(`Error signing in?: ${error ?? null}`)
    console.log(`Email: ${email}`)
  }

  const handleLogin = async (formValues: FormData) => {
    signInWithEmail(formValues.email)
  }

  const handleOAuthLogin = async (provider: Provider) => {
    // You need to enable the third party auth you want in Authentication > Settings
    // Read more on: https://supabase.com/docs/guides/auth#third-party-logins
    let { error } = await supabase.auth.signInWithOAuth({ provider })
    if (error) console.log('Error: ', error.message)
  }

  return (
    <main className="flex w-full items-center justify-center">
      <form
        className={
          'via-sky800 relative flex h-full w-full min-w-fit max-w-sm flex-col rounded-md border border-sky-600 bg-gradient-radial from-sky-950 to-sky-700 p-8 text-base text-sky-300 shadow-lg sm:h-auto sm:w-2/5'
        }
        onSubmit={handleSubmit(handleLogin)}
      >
        <Title align="center" weight={'normal'}>
          {' '}
          Login{' '}
        </Title>
        <TextInput
          label="Email"
          aria-label="email"
          labelProps={{
            size: 'lg',
            sx: { color: '#7dd3fc', padding: '3px 0' },
          }}
          type={'email'}
          placeholder="Email"
          withAsterisk
          icon={<AtSign size="1.25rem" />}
          {...register('email')}
          required
        />
        {errors.email && (
          <p className="mt-1 self-center text-sm text-red-600">
            {errors.email.message}
          </p>
        )}

        <div className="mt-2 flex">
          <span className="mx-1.5 block w-full rounded-md shadow-sm">
            <button
              type="submit"
              className="focus:shadow-outline-sky mx-auto flex w-full justify-center rounded-md border border-transparent bg-sky-600 px-4 py-2 text-sm font-medium text-sky-950 transition duration-150 ease-in-out hover:bg-sky-500 focus:border-sky-700 focus:outline-none active:bg-sky-700"
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

          <div className="flex justify-evenly gap-2">
            <div className="mt-3">
              <Button
                className="focus:shadow-outline-sky mx-auto flex w-full min-w-[90px] items-center justify-center rounded-md border border-transparent bg-sky-600 px-4 py-2 text-sm font-medium text-sky-950 transition duration-150 ease-in-out hover:bg-sky-500 focus:border-sky-700 focus:outline-none active:bg-sky-700"
                icon={<GithubIcon />}
                onClick={() => handleOAuthLogin('github')}
              />
            </div>
            <div className="mt-3">
              <Button
                className="focus:shadow-outline-sky mx-auto flex w-full min-w-[90px] items-center justify-center rounded-md border border-transparent bg-sky-600 px-4 py-2 text-sm font-medium text-sky-950 transition duration-150 ease-in-out hover:bg-sky-500 focus:border-sky-700 focus:outline-none active:bg-sky-700"
                icon={<Google />}
                onClick={() => handleOAuthLogin('google')}
              />
            </div>
          </div>
        </div>
      </form>
    </main>
  )
}

export default Auth
