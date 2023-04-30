import { useState } from 'react'
import { useForm } from 'react-hook-form'
import Button from './Button'
import { foodItem, foodItemDB } from '../../types/types'
import { z, ZodType } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { readAll, readItem } from '../utils/useDatabase'
import ResultsDisplay from './ResultsDisplay'
import { Search } from 'lucide-react'
import { Title, Loader } from '@mantine/core'

type FormData = {
	query: string
}

function SearchForm() {
	const [currentQuery, setCurrentQuery] = useState<FormData>({ query: '' })
	const [matchingResults, setMatchingResults] = useState<Array<foodItem>>([])
	const [showResults, setShowResults] = useState<boolean>(false)
	const [loading, setLoading] = useState<boolean>(false)

	const schema: ZodType<FormData> = z.object({
		query: z.string()
	})

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors }
	} = useForm<FormData>({
		resolver: zodResolver(schema),
		defaultValues: {
			query: ''
		}
	})

	const handleDisplayResults = () => {
		if (showResults) {
			return( loading ? <Loader /> : <ResultsDisplay results={matchingResults} />)
	}}

	const onSubmit = (input: FormData, e: any) => {
		setCurrentQuery(input)
		let newMatches: any
		setLoading(true)
		readItem(input.query)
			.then((res) => {
				newMatches = res
				setLoading(false)
			})
			.finally(() => setMatchingResults(newMatches))

		reset()
		setShowResults(true)
	}

	const showAll = async () => {
		if (matchingResults.length === 0) {
			let newMatches: any
			setLoading(true)
			await readAll().then((res) => {
				newMatches = res
				setLoading(false)
				setMatchingResults(newMatches)
			})
		}
		setShowResults(!showResults)
	}
	return (
		<div className='flex flex-col items-center flex-wrap '>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className='bg-gradient-to-br from-sky-900 to-sky-950 flex flex-col gap-2 rounded-lg m-2 p-3 items-center max-w-xs'
			>
				<div className='flex flex-col items-center'>
					<label className='text-xs'>Search Term</label>
					<input
						type='string'
						placeholder=''
						{...register('query')}
						className='rounded-lg p-1 m-1 bg-gray-300 text-sky-600'
					/>
					{errors.query && (
						<p className='text-sm text-red-600 mt-1 self-center'>
							{errors.query.message}
						</p>
					)}
				</div>
				<Button
					text='Search  Database'
					type='submit'
					icon={<Search />}
					aria-disabled={loading}
				/>
				<Button
					text='Show all'
					onClick={showAll}
					aria-disabled={loading}
				/>
			</form>
			{handleDisplayResults()}
		</div>
	)
}

export default SearchForm
