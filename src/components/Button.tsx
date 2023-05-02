import { ReactJSXElement } from '@emotion/react/types/jsx-namespace'
import { describe, it } from 'vitest'

interface Props extends React.HTMLAttributes<HTMLButtonElement>{
	text?: string
	type?: 'button' | 'submit'
	icon?: ReactJSXElement
	disabled?: boolean
	className?: string // allows overriding styles manually
}

function Button({
	text,
	icon,
	disabled,
	className,
	...props
}: Props) {
	return (
		<button
			className={
					'hover:bg-slate-900 text-sky-300 font-semibold py-2 px-4 border border-sky-300 hover:border-transparent rounded min-w-[60px] transition-colors duration:200'
					+ className
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