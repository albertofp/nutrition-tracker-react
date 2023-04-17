type Props = {
	text?: string
	onClick?: () => void
}

const btnStyle =
	'bg-transparent hover:bg-slate-900 text-teal-600 font-semibold py-2 px-4 border border-teal-800 hover:border-transparent rounded min-w-[60px]'

function Button({ text, onClick }: Props) {
	return (
		<button
			className={btnStyle}
			onClick={onClick}
		>
			{text}
		</button>
	)
}

export function SubmitButton({ text }: Props) {
	return (
		<button
			type='submit'
			className={btnStyle}
		>
			{text}
		</button>
	)
}

export default Button
