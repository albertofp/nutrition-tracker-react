import { useState } from 'react'
import Button from '../components/Button'
import MacrosList from '../components/MacrosList'
import { foodItem } from '../../types/types'
import ManualInputForm from '../components/ManualInputForm'
import SearchForm from '../components/SearchForm'
import { DayContext } from '../DayContext'
import { notifications } from '@mantine/notifications'
import { CheckCircle2, Search, RotateCcw, ListPlus } from 'lucide-react'
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace'

export default function Home() {
  const [currentDisplay, setCurrentDisplay] = useState<ReactJSXElement | null>(
    null
  )
  const [dayTotal, setDayTotal] = useState<foodItem>({
    name: '',
    calories: 0,
    protein: 0,
    carbs: 0,
    fat: 0,
    fiber: 0,
    id: 0,
    created_at: '',
    img: '',
    imgAuthor: '',
  })

  const displayManualInput = () => {
    currentDisplay === null
      ? setCurrentDisplay(<ManualInputForm />)
      : setCurrentDisplay(null)
  }

  const displaySearch = () => {
    currentDisplay === null
      ? setCurrentDisplay(<SearchForm />)
      : setCurrentDisplay(null)
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
      imgAuthor: '',
    })
    //toast('success', 'Daily total reset')
    notifications.show({
      message: 'Daily total reset!',
      color: 'green',
      autoClose: 1000,
      icon: <CheckCircle2 />,
      sx: { backgroundColor: 'lightgreen' },
    })
  }

  return (
    <DayContext.Provider value={{ dayTotal, setDayTotal }}>
      <div className="flex w-full flex-col">
        <div className="mx-auto flex max-w-[1240px] items-center justify-start gap-4 px-4">
          <div className="flex gap-2">
            <Button text="Search" onClick={displaySearch} icon={<Search />} />
            <Button
              text="Manual Input"
              onClick={displayManualInput}
              icon={<ListPlus />}
            />
            <Button text="Reset" onClick={resetDayTotal} icon={<RotateCcw />} />
          </div>
        </div>

        <div className="mx-auto flex min-w-[350px] max-w-[1240px] flex-col items-center gap-1 p-4 text-sky-300">
          <MacrosList item={dayTotal} title="Daily Total" />
          {currentDisplay}
        </div>
      </div>
    </DayContext.Provider>
  )
}
