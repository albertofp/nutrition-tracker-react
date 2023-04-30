import { useState } from 'react'
import Button from '../components/Button'
import MacrosList from '../components/MacrosList'
import { foodItemDB } from '../../types/types'
import ManualInputForm from '../components/ManualInputForm'
import SearchForm from '../components/SearchForm'
import { DayContext } from '../DayContext'
import { notifications } from '@mantine/notifications'
import { CheckCircle2, Search, RotateCcw, ListPlus } from 'lucide-react'
import { Title } from '@mantine/core'

export default function Home() {
	const [currentDisplay, setCurrentDisplay] = useState<null | string>(null)
	const [dayTotal, setDayTotal] = useState<foodItemDB>({
		name: '',
		calories: 0,
		protein: 0,
		carbs: 0,
		fat: 0,
		fiber: 0,
		id: 0,
		created_at: '',
		img: '',
		imgAuthor: ''
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
			fiber: 0,
			id: 0,
			created_at: '',
			img: '',
			imgAuthor: ''
		})
		//toast('success', 'Daily total reset')
		notifications.show({
			message: 'Daily total reset!',
			color: 'green',
			autoClose: 1000,
			icon: <CheckCircle2 />,
			sx: { backgroundColor: 'lightgreen' }
		})
	}

	return (
		<DayContext.Provider value={{ dayTotal, setDayTotal }}>
			<div className='flex flex-col m-2 w-full'>
				<div className='flex justify-start gap-4 max-w-[1240px] mx-auto px-4 items-center'>
					<div className='flex gap-2'>
						<Button
							text='Search'
							onClick={displaySearch}
							icon={<Search />}
						/>
						<Button
							text='Manual Input'
							onClick={displayManualInput}
							icon={<ListPlus />}
						/>
						<Button
							text='Reset'
							onClick={resetDayTotal}
							icon={<RotateCcw />}
						/>
					</div>
				</div>

				<div className='flex flex-col items-center gap-2 text-sky-300 max-w-[1240px] min-w-[350px] mx-auto p-4'>
					<MacrosList
						item={dayTotal}
						title='Daily Total'
					/>
					{displayModule()}
				</div>
			</div>
		</DayContext.Provider>
	)
}
