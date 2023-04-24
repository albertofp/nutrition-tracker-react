type Props = {
	text?: string
	onClick?: () => void
	disabled?: boolean
}

const btnStyle =
	'bg-transparent hover:bg-slate-900 active:bg-transparent text-sky-300 font-semibold py-2 px-4 border border-sky-300 hover:border-transparent rounded min-w-[60px] transition-colors duration:200'

function Button({ text, onClick, disabled }: Props) {
	return (
		<button
			className={btnStyle}
			onClick={onClick}
			disabled={disabled}
		>
			{text}
		</button>
	)
}

export function SubmitButton({ text, disabled }: Props) {
	return (
		<button
			type='submit'
			className={btnStyle}
			disabled={disabled}
		>
			{text}
		</button>
	)
}

export default Button
