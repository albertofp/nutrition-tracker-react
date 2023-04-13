import React, { FormEvent } from 'react'
import SectionTitle from './SectionTitle'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { SubmitButton } from './Button'
import { yupResolver } from '@hookform/resolvers/yup'
import { foodVals } from '../../types'
import { mergeObjects } from '../mergeObjects'

type Props = {
	dayTotal: foodVals
	setDayTotal: React.Dispatch<
		React.SetStateAction<{
			calories: number
			protein: number
			carbs: number
			fat: number
			fiber: number
		}>
	>
}

function ManualInputForm({ dayTotal, setDayTotal }: Props) {
	const schema = yup.object().shape({
		calories: yup.number().integer().positive().required(),
		protein: yup.number().integer().nullable(),
		carbs: yup.number().integer().nullable(),
		fat: yup.number().integer().nullable(),
		fiber: yup.number().integer().nullable()
	})

	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm({
		resolver: yupResolver(schema)
	})

	const onSubmit = (formValues: Object, e) => {
		e!.preventDefault()
		setDayTotal(mergeObjects(dayTotal, formValues))
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
						{...register('calories', { required: true })}
						className='border-2 border-teal-950 rounded-lg p-1 m-1 bg-slate-400 text-teal-800 placeholder-inherit'
					/>
				</div>
				<div className='flex flex-col items-start'>
					<label className='text-xs'>Protein</label>
					<input
						type='number'
						placeholder='Protein'
						{...register('protein')}
						className='border-2 border-teal-950 rounded-lg p-1 m-1 bg-slate-400 text-teal-800 placeholder-inherit'
					/>
				</div>
				<div className='flex flex-col items-start'>
					<label className='text-xs'>Carbs</label>
					<input
						type='number'
						placeholder='Carbs'
						{...register('carbs')}
						className='border-2 border-teal-950 rounded-lg p-1 m-1 bg-slate-400 text-teal-800 placeholder-inherit'
					/>
				</div>
				<div className='flex flex-col items-start'>
					<label className='text-xs'>Fat</label>
					<input
						type='number'
						placeholder='Fat'
						{...register('fat')}
						className='border-2 border-teal-950 rounded-lg p-1 m-1 bg-slate-400 text-teal-800 placeholder-inherit'
					/>
				</div>
				<div className='flex flex-col items-start'>
					<label className='text-xs'>Fiber</label>
					<input
						type='number'
						placeholder='Fiber'
						{...register('fiber')}
						className='border-2 border-teal-950 rounded-lg p-1 m-1 bg-slate-400 text-teal-800 placeholder-inherit'
					/>
				</div>
				<SubmitButton text='Input' />
			</form>
		</>
	)
}

export default ManualInputForm
