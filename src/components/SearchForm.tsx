import { useState } from 'react'
import SectionTitle from './SectionTitle'
import { useForm } from 'react-hook-form'
import { SubmitButton } from './Button'
import { foodItem } from '../../types'
import { z, ZodType } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { readItem } from '../useDatabase'
import ResultsDisplay from './ResultsDisplay'

type Props = {}
type FormData = {
	query: string
}

function SearchForm({}: Props) {
	const [currentQuery, setCurrentQuery] = useState<FormData>({ query: '' })
	const [matchingResults, setMatchingResults] = useState<Array<foodItem>>([])
	const [showResults, setShowResults] = useState<boolean>(false)

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

	const onSubmit = (input: FormData, e: any) => {
		setCurrentQuery(input)
		console.log('input:', input)
		console.log('currentQuery:', currentQuery)
		let newMatches: any
		readItem(input.query)
			.then((res) => (newMatches = res))
			.finally(() => setMatchingResults(newMatches))

		reset()
		setShowResults(true)
	}
	return (
		<div className='flex flex-col items-center max-w-lg flex-wrap'>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className='bg-teal-950 flex flex-col gap-2 rounded-lg m-2 p-3 items-center max-w-xs'
			>
				<div className='flex flex-col items-center'>
					<label className='text-xs'>Search Term</label>
					<input
						type='string'
						placeholder=''
						{...register('query')}
						className='border-2 border-teal-950 rounded-lg p-1 m-1 bg-slate-400 text-teal-800 placeholder-inherit'
					/>
					{errors.query && (
						<p className='text-sm text-red-600 mt-1 self-center'>
							{errors.query.message}
						</p>
					)}
				</div>
				<SubmitButton text='Search  Database' />
			</form>

			{showResults && matchingResults.length > 0 && (
				<ResultsDisplay results={matchingResults} />
			)}
			{showResults && matchingResults.length == 0 && (
				<div className='flex flex-col items-center'>
					<SectionTitle
						title={'No Results Found'}
						type={'h2'}
					/>
				</div>
			)}
		</div>
	)
}

export default SearchForm
