import React, { useState } from 'react'
import SectionTitle from './SectionTitle'
import { useForm, UseFormReset } from 'react-hook-form'
import { SubmitButton } from './Button'
import { foodItem } from '../../types'
import { mergeObjects } from '../mergeObjects'
import { z, ZodType } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { readItem } from '../useDatabase'

type Props = {}
type FormData = {
	query: string
}

function SearchForm({}: Props) {
	const [currentQuery, setCurrentQuery] = useState<FormData>({ query: '' })

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
		readItem(input.query)
		reset()
	}

	return (
		<>
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
		</>
	)
}

export default SearchForm
