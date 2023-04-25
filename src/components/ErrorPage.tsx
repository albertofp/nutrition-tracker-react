import { useRouteError } from 'react-router-dom'

export default function ErrorPage() {
	const error = useRouteError()
	console.error(error)

	return (
		<div
			id='error-page'
			className='w-full h-full flex flex-col gap-8 justify-center items-center text-sky-300'
		>
			<h1>Oops!</h1>
			<p>Sorry, an unexpected error has occurred.</p>
			<p>
				<i className='font-thin'>{error.statusText || error.message}</i>
			</p>
		</div>
	)
}
