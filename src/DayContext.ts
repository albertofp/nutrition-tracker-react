import { createContext } from 'react'
import { foodItem } from '../types/types'
export type DayContextTypes = {
  dayTotal: foodItem
  setDayTotal: React.Dispatch<React.SetStateAction<foodItem>>
}

export const DayContext = createContext<DayContextTypes | null>(null)
