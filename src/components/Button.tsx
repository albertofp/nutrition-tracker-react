import { ReactJSXElement } from '@emotion/react/types/jsx-namespace'
import { describe, it } from 'vitest'

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  text?: string
  type?: 'button' | 'submit'
  icon?: ReactJSXElement
  disabled?: boolean
  className?: string // allows overriding styles manually
}

function Button({ text, icon, disabled, className, ...props }: Props) {
  return (
    <button
      className={
        'duration:200 min-w-[60px] rounded border border-sky-300 px-4 py-2 font-semibold text-sky-300 transition-colors hover:border-transparent hover:bg-slate-900' +
        className
      }
      {...props}
    >
      <div className={'flex gap-2'}>
        {icon}
        {text}
      </div>
    </button>
  )
}

export default Button
