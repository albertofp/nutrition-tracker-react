import { createContext } from 'react'
import { foodItem } from '../types/types'

interface DayContextTypes {
	dayTotal: foodItem
	setDayTotal: React.Dispatch<React.SetStateAction<foodItem>>
}

export const DayContext = createContext<DayContextTypes | null>(null)
