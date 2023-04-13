import React from 'react'
import SectionTitle from './SectionTitle'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { SubmitButton } from './Button'

type Props = {}

function ManualInputForm({}: Props) {
	const { register, handleSubmit } = useForm()

	const schema = yup.object().shape({
		calories: yup.number().integer().required(),
		protein: yup.number().integer(),
		carbs: yup.number().integer(),
		fat: yup.number().integer(),
		fiber: yup.number().integer()
	})

	const onSubmit = (data) => {
		console.log(data)
	}

	return (
		<>
			<SectionTitle
				title='Manual Input Form'
				type='h3'
			/>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className='bg-teal-950 flex flex-col gap-2 rounded-lg m-2 py-2 items-center max-w-xs'
			>
				<input
					type='number'
					placeholder='Calories'
					{...register('calories', { required: true })}
					className='border-2 border-teal-950 rounded-lg p-1 m-1 bg-slate-400 text-teal-800 placeholder-inherit'
				/>
				<input
					type='number'
					placeholder='Protein'
					{...register('protein')}
					className='border-2 border-teal-950 rounded-lg p-1 m-1 bg-slate-400 text-teal-800 placeholder-inherit'
				/>
				<input
					type='number'
					placeholder='Carbs'
					{...register('carbs')}
					className='border-2 border-teal-950 rounded-lg p-1 m-1 bg-slate-400 text-teal-800 placeholder-inherit'
				/>
				<input
					type='number'
					placeholder='Fat'
					{...register('fat')}
					className='border-2 border-teal-950 rounded-lg p-1 m-1 bg-slate-400 text-teal-800 placeholder-inherit'
				/>
				<input
					type='number'
					placeholder='Fiber'
					{...register('fiber')}
					className='border-2 border-teal-950 rounded-lg p-1 m-1 bg-slate-400 text-teal-800 placeholder-inherit'
				/>
				<SubmitButton text='Input' />
			</form>
		</>
	)
}

export default ManualInputForm
