import { useState } from 'react'
import Button from './Button'
import MacrosList from './MacrosList'
import SectionTitle from './SectionTitle'
import { foodItem } from '../../types'
import ManualInputForm from './ManualInputForm'
import SearchForm from './SearchForm'
import { DayContext } from '../DayContext'
import { useToast } from './Toast/useToast'
import { ToastProvider } from './Toast/ToastContext'

export default function Home() {
	const toast = useToast(4000)
	const [currentDisplay, setCurrentDisplay] = useState<null | string>(null)
	const [dayTotal, setDayTotal] = useState<foodItem>({
		name: '',
		calories: 0,
		protein: 0,
		carbs: 0,
		fat: 0,
		fiber: 0
	})

	const displayManualInput = () => {
		if (currentDisplay === 'ManualInputForm') {
			setCurrentDisplay(null)
		} else setCurrentDisplay('ManualInputForm')
	}

	const displaySearch = () => {
		if (currentDisplay === 'SearchForm') {
			setCurrentDisplay(null)
		} else setCurrentDisplay('SearchForm')
	}

	const displayModule = () => {
		switch (currentDisplay) {
			case 'ManualInputForm':
				return (
					<ManualInputForm
						macros={dayTotal}
						setMacros={setDayTotal}
					/>
				)
			case 'SearchForm':
				return <SearchForm />
			default:
				return null
		}
	}

	const resetDayTotal = () => {
		setDayTotal({
			name: '',
			calories: 0,
			protein: 0,
			carbs: 0,
			fat: 0,
			fiber: 0
		})
		toast('success', 'Reset successful')
	}

	return (
		<DayContext.Provider value={{ dayTotal, setDayTotal }}>
			<div className='flex flex-col m-2 w-full'>
				<div className='flex justify-start gap-4 max-w-[1240px] mx-auto px-4 items-center'>
					<div className='flex gap-2'>
						<Button
							text='Search'
							onClick={displaySearch}
						/>
						<Button
							text='Manual Input'
							onClick={displayManualInput}
						/>
						<Button
							text='Reset'
							onClick={resetDayTotal}
						/>
					</div>
				</div>

				<div className='flex flex-col items-center gap-2 text-sky-300 max-w-[1240px] min-w-[350px] mx-auto p-4'>
					<SectionTitle
						title='Daily Total'
						type='h3'
					></SectionTitle>
					<MacrosList
						{...dayTotal}
						showName={false}
					/>
					{displayModule()}
				</div>
			</div>
		</DayContext.Provider>
	)
}
