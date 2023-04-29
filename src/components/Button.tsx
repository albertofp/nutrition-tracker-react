import { ReactJSXElement } from '@emotion/react/types/jsx-namespace'

type Props = {
	text?: string
	onClick?: () => void
	disabled?: boolean
	type?: 'button' | 'submit'
	icon?: ReactJSXElement
	className?: string // allows overriding styles manually
}

function Button({
	text,
	onClick,
	disabled,
	type = 'button',
	icon,
	className
}: Props) {
	return (
		<button
			className={
				!className
					? 'bg-transparent hover:bg-slate-900 active:bg-transparent text-sky-300 font-semibold py-2 px-4 border border-sky-300 hover:border-transparent rounded min-w-[60px] transition-colors duration:200'
					: className
			}
			onClick={onClick}
			disabled={disabled}
			type={type}
		>
			<div className={'flex gap-2'}>
				{icon}
				{text}
			</div>
		</button>
	)
}

export default Button
