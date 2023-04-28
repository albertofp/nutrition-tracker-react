import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { foodItem } from '../../types/types'
import { mergeObjects } from '../utils/mergeObjects'
import { z, ZodType } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { addItem } from '../utils/useDatabase'
import { notifications} from '@mantine/notifications'
import { CheckCircle2, Plus } from 'lucide-react'
import Button from './Button'
import { Title } from '@mantine/core'

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

const inputStyle =
	'border-2 border-sky-950 rounded-lg p-1 m-1 bg-slate-400 text-sky-800 placeholder-inherit'

const errorStyle = 'text-sm text-red-600 mt-1 self-center'

function ManualInputForm({ macros, setMacros }: Props) {
	const [saveTemplate, setSaveTemplate] = useState(false)

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
		notifications.show({
			message: 'Macros added',
			color: 'green',
			autoClose: 2000,
			icon: <CheckCircle2 />,
			sx: { backgroundColor: 'lightgreen' }
		})
		newItem.name.length &&
			notifications.show({
				message: 'Macros added',
				color: 'green',
				autoClose: 2000,
				icon: <CheckCircle2 />,
				sx: { backgroundColor: 'lightgreen' }
			})
	}

	const onCheckBoxChange = (e: any) => {
		setSaveTemplate(!saveTemplate)
	}
	return (
		<>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className='bg-gradient-to-br from-sky-900 to-sky-950 flex flex-col gap-2 rounded-lg m-2 p-3 items-center max-w-xs'
			>
				<Title order={3} weight='semibold'>Manual Input</Title>
				<div className='flex flex-col items-start'>
					<label className='text-xs'>Calories</label>
					<input
						type='number'
						placeholder='Calories'
						{...register('calories', {
							valueAsNumber: true
						})}
						className={inputStyle}
					/>
					{errors.calories && (
						<p className={errorStyle}>{errors.calories.message}</p>
					)}
				</div>
				<div className='flex flex-col items-start'>
					<label className='text-xs'>Protein</label>
					<input
						type='number'
						placeholder='Protein'
						{...register('protein', { valueAsNumber: true })}
						className={inputStyle}
					/>
					{errors.protein && (
						<p className={errorStyle}>{errors.protein.message}</p>
					)}
				</div>
				<div className='flex flex-col items-start'>
					<label className='text-xs'>Carbs</label>
					<input
						type='number'
						placeholder='Carbs'
						{...register('carbs', { valueAsNumber: true })}
						className={inputStyle}
					/>
					{errors.carbs && <p className={errorStyle}>{errors.carbs.message}</p>}
				</div>
				<div className='flex flex-col items-start'>
					<label className='text-xs'>Fat</label>
					<input
						type='number'
						placeholder='Fat'
						{...register('fat', { valueAsNumber: true })}
						className={inputStyle}
					/>
					{errors.fat && <p className={errorStyle}>{errors.fat.message}</p>}
				</div>
				<div className='flex flex-col items-start'>
					<label className='text-xs'>Fiber</label>
					<input
						type='number'
						placeholder='Fiber'
						{...register('fiber', { valueAsNumber: true })}
						className={inputStyle}
					/>
					{errors.fiber && <p className={errorStyle}>{errors.fiber.message}</p>}
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
							className={inputStyle}
						/>
						{errors.name && (
							<p className={errorStyle}>{errors.name?.message}</p>
						)}
					</div>
				)}

				<Button type='submit' text='Input' icon={<Plus/>}/>
			</form>
		</>
	)
}

export default ManualInputForm
