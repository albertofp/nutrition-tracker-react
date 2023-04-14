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
	calories: number | null
	protein: number | null
	carbs: number | null
	fat: number | null
	fiber: number | null
}

function ManualInputForm({ dayTotal, setDayTotal }: Props) {
	const schema: ZodType<FormData> = z.object({
		calories: z.number().nullable(),
		protein: z.number().nullable(),
		carbs: z.number().nullable(),
		fat: z.number().nullable(),
		fiber: z.number().nullable()
	})

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors }
	} = useForm<FormData>({
		resolver: zodResolver(schema),
		defaultValues: {
			calories: null,
			protein: null,
			carbs: null,
			fat: null,
			fiber: null
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
						{...register('calories', {
							valueAsNumber: true
						})}
						className='border-2 border-teal-950 rounded-lg p-1 m-1 bg-slate-400 text-teal-800 placeholder-inherit'
					/>
					{errors.calories && (
						<p className='text-sm text-red-600 mt-1 self-center'>
							{errors.calories.message}
						</p>
					)}
				</div>
				<div className='flex flex-col items-start'>
					<label className='text-xs'>Protein</label>
					<input
						type='number'
						placeholder='Protein'
						{...register('protein', { valueAsNumber: true })}
						className='border-2 border-teal-950 rounded-lg p-1 m-1 bg-slate-400 text-teal-800 placeholder-inherit'
					/>
					{errors.protein && (
						<p className='text-sm text-red-600 mt-1 self-center'>
							{errors.protein.message}
						</p>
					)}
				</div>
				<div className='flex flex-col items-start'>
					<label className='text-xs'>Carbs</label>
					<input
						type='number'
						placeholder='Carbs'
						{...register('carbs', { valueAsNumber: true })}
						className='border-2 border-teal-950 rounded-lg p-1 m-1 bg-slate-400 text-teal-800 placeholder-inherit'
					/>
					{errors.carbs && (
						<p className='text-sm text-red-600 mt-1 self-center'>
							{errors.carbs.message}
						</p>
					)}
				</div>
				<div className='flex flex-col items-start'>
					<label className='text-xs'>Fat</label>
					<input
						type='number'
						placeholder='Fat'
						{...register('fat', { valueAsNumber: true })}
						className='border-2 border-teal-950 rounded-lg p-1 m-1 bg-slate-400 text-teal-800 placeholder-inherit'
					/>
					{errors.fat && (
						<p className='text-sm text-red-600 mt-1 self-center'>
							{errors.fat.message}
						</p>
					)}
				</div>
				<div className='flex flex-col items-start'>
					<label className='text-xs'>Fiber</label>
					<input
						type='number'
						placeholder='Fiber'
						{...register('fiber', { valueAsNumber: true })}
						className='border-2 border-teal-950 rounded-lg p-1 m-1 bg-slate-400 text-teal-800 placeholder-inherit'
					/>
					{errors.fiber && (
						<p className='text-sm text-red-600 mt-1 self-center'>
							{errors.fiber.message}
						</p>
					)}
				</div>
				<SubmitButton text='Input' />
			</form>
		</>
	)
}

export default ManualInputForm
