import React from 'react'
import SectionTitle from './SectionTitle'
import { useForm, UseFormReset } from 'react-hook-form'
import { SubmitButton } from './Button'
import { foodItem } from '../../types'
import { mergeObjects } from '../mergeObjects'
import { z, ZodType } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { addItem } from '../useDatabase'

type Props = {
	macros: foodItem
	setMacros: React.Dispatch<React.SetStateAction<foodItem>>
}

type FormData = {
	name: string
	calories: number
	protein: number
	carbs: number
	fat: number
	fiber: number
}

function ManualInputForm({ macros, setMacros }: Props) {
	const [saveTemplate, setSaveTemplate] = React.useState(false)
	const [newItem, setNewItem] = React.useState<foodItem>({
		name: '',
		calories: 0,
		protein: 0,
		carbs: 0,
		fat: 0,
		fiber: 0
	})

	const schema: ZodType<FormData> = z.object({
		name: z.string(),
		calories: z.number().min(0),
		protein: z.number().min(0),
		carbs: z.number().min(0),
		fat: z.number().min(0),
		fiber: z.number().min(0)
	})

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors }
	} = useForm<FormData>({
		resolver: zodResolver(schema),
		defaultValues: {
			name: '',
			calories: 0,
			protein: 0,
			carbs: 0,
			fat: 0,
			fiber: 0
		}
	})

	const onSubmit = (formValues: FormData, e: any) => {
		const newItem = mergeObjects(formValues, macros)
		setMacros(newItem)
		if (saveTemplate && newItem.name.length > 0) {
			newItem.calories +
				newItem.protein +
				newItem.carbs +
				newItem.fat +
				newItem.fiber >
				0 && addItem(newItem)
		}
		reset()
	}

	const onCheckBoxChange = (e: any) => {
		setSaveTemplate(!saveTemplate)
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
				<div className='flex gap-2 items-start'>
					<label className='text-xs'>Add to database</label>
					<input
						type='checkbox'
						onChange={onCheckBoxChange}
						checked={saveTemplate}
					/>
				</div>

				{saveTemplate && (
					<div className='flex flex-col items-start'>
						<label className='text-xs'>Name</label>
						<input
							type='string'
							placeholder='Name'
							{...register('name')}
							className='border-2 border-teal-950 rounded-lg p-1 m-1 bg-slate-400 text-teal-800 placeholder-inherit'
						/>
						{errors.name && (
							<p className='text-sm text-red-600 mt-1 self-center'>
								{errors.name?.message}
							</p>
						)}
					</div>
				)}

				<SubmitButton text='Input' />
			</form>
		</>
	)
}

export default ManualInputForm
