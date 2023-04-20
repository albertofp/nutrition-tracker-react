type Props = {
	title: string
	type?: string
}

const style = 'text-3xl text-sky-300 flex justify-center items-center'

function SectionTitle({ title, type = 'h1' }: Props) {
	switch (type) {
		case 'h1':
			return <h1 className={style}>{title}</h1>
		case 'h2':
			return <h2 className={style}>{title}</h2>
		case 'h3':
			return <h3 className={style}>{title}</h3>
		default:
			return <h1 className={style}>Invalid Header Type</h1>
	}
}

export default SectionTitle
