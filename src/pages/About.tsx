import SupabaseIcon from '../assets/supabase-icon.svg'
import TypeScriptIcon from '../assets/typescript-logo.svg'
import ReactIcon from '../assets/react.svg'
import TailwindIcon from '../assets/tailwindcss-icon.svg'
import ViteIcon from '../assets/vite-logo.svg'
import UnsplashIcon from '../assets/unsplash.svg'
import { Paper, Text, Title } from '@mantine/core'

function About() {
  return (
    <div className="flex flex-col p-2">
      <div className="mx-auto flex h-24 max-w-[1240px] flex-col items-center justify-between gap-4 px-4 text-sky-300">
        <Title align="center" weight={'normal'}>
          About
        </Title>
        <Text id="aboutText" className=" max-w-[420px] text-xl" align="justify">
          App to track and display your daily calorie and macro nutrient
          consumption. Developed by Alberto F. Pluecker as a learning project on
          React, Typescript, Tailwind and Supabase.
        </Text>
        <div className="flex items-center gap-4">
          <a href="https://react.dev/">
            <img
              src={ReactIcon}
              className="w-14 duration-200 ease-in hover:scale-125"
            />
          </a>
          <a href="https://vitejs.dev/">
            <img
              src={ViteIcon}
              className="w-14 duration-200 ease-in hover:scale-125"
            />
          </a>
          <a href="https://www.typescriptlang.org/">
            <img
              src={TypeScriptIcon}
              className="w-14 duration-200 ease-in hover:scale-125"
            />
          </a>
          <a href="https://tailwindcss.com/">
            <img
              src={TailwindIcon}
              className="w-16 duration-200 ease-in hover:scale-125"
            />
          </a>
          <a href="https://supabase.com/">
            <img
              src={SupabaseIcon}
              className="w-14 duration-200 ease-in hover:scale-125"
            />
          </a>
          <a href="https://unsplash.com/">
            <img
              src={UnsplashIcon}
              className="w-14 duration-200 ease-in hover:scale-125"
            />
          </a>
        </div>
      </div>
    </div>
  )
}

export default About
