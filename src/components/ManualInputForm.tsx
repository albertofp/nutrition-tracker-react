import React from 'react'
import SectionTitle from './SectionTitle'
import { useForm, UseFormReset } from 'react-hook-form'
import { SubmitButton } from './Button'
import { foodVals } from '../../types'
import { mergeObjects } from '../mergeObjects'
import { z, ZodType } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

type Props = {
	dayTotal: foodVals
	setDayTotal: React.Dispatch<React.SetStateAction<foodVals>>
}

type FormData = {
	calories: number
	protein: number
	carbs: number
	fat: number
	fiber: number
}

function ManualInputForm({ dayTotal, setDayTotal }: Props) {
	const schema: ZodType<FormData> = z
		.object({
			calories: z.number().min(1),
			protein: z.number(),
			carbs: z.number(),
			fat: z.number(),
			fiber: z.number()
		})
		.refine((data) => data.calories > 0, {
			message: 'Calories must be greater than 0',
			path: ['calories']
		})

	const { register, handleSubmit, reset } = useForm<FormData>({
		resolver: zodResolver(schema),
		defaultValues: {
			calories: 0,
			protein: 0,
			carbs: 0,
			fat: 0,
			fiber: 0
		}
	})

	const onSubmit = (formValues: FormData, e: any) => {
		setDayTotal(mergeObjects(dayTotal, formValues))
		reset()
	}

	return (
		<>
			<SectionTitle
				title='Manual Input Form'
				type='h3'
			/>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className='bg-teal-950 flex flex-col gap-2 rounded-lg m-2 p-3 items-center max-w-xs'
			>
				<div className='flex flex-col items-start'>
					<label className='text-xs'>Calories</label>
					<input
						type='number'
						placeholder='Calories'
						{...register('calories', { valueAsNumber: true })}
						className='border-2 border-teal-950 rounded-lg p-1 m-1 bg-slate-400 text-teal-800 placeholder-inherit'
					/>
				</div>
				<div className='flex flex-col items-start'>
					<label className='text-xs'>Protein</label>
					<input
						type='number'
						placeholder='Protein'
						{...register('protein', {
							valueAsNumber: true,
							setValueAs: (v) =>
								v === (null || undefined || '') ? 0 : parseInt(v)
						})}
						className='border-2 border-teal-950 rounded-lg p-1 m-1 bg-slate-400 text-teal-800 placeholder-inherit'
					/>
				</div>
				<div className='flex flex-col items-start'>
					<label className='text-xs'>Carbs</label>
					<input
						type='number'
						placeholder='Carbs'
						{...register('carbs', { valueAsNumber: true })}
						className='border-2 border-teal-950 rounded-lg p-1 m-1 bg-slate-400 text-teal-800 placeholder-inherit'
					/>
				</div>
				<div className='flex flex-col items-start'>
					<label className='text-xs'>Fat</label>
					<input
						type='number'
						placeholder='Fat'
						{...register('fat', { valueAsNumber: true })}
						className='border-2 border-teal-950 rounded-lg p-1 m-1 bg-slate-400 text-teal-800 placeholder-inherit'
					/>
				</div>
				<div className='flex flex-col items-start'>
					<label className='text-xs'>Fiber</label>
					<input
						type='number'
						placeholder='Fiber'
						{...register('fiber', { valueAsNumber: true })}
						className='border-2 border-teal-950 rounded-lg p-1 m-1 bg-slate-400 text-teal-800 placeholder-inherit'
					/>
				</div>
				<SubmitButton text='Input' />
			</form>
		</>
	)
}

export default ManualInputForm
