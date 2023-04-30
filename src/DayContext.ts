import { createContext } from 'react'
import { foodItemDB } from '../types/types'
type DayContextTypes= {
	dayTotal: foodItemDB,
	setDayTotal: React.Dispatch<React.SetStateAction<foodItemDB>>
}

export const DayContext = createContext<DayContextTypes | null>(null)
