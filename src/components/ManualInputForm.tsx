import { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import { foodItem } from '../../types/types'
import { z, ZodType } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { addItem } from '../utils/useDatabase'
import { notifications } from '@mantine/notifications'
import { CheckCircle2, Plus, AlertCircle } from 'lucide-react'
import Button from './Button'
import { Title } from '@mantine/core'
import usePhoto from '../hooks/usePhoto'
import { DayContext, DayContextTypes } from '../DayContext'

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

function ManualInputForm() {
  const [saveTemplate, setSaveTemplate] = useState(false)
  const { dayTotal, setDayTotal } = useContext(DayContext) as DayContextTypes

  const schema: ZodType<FormData> = z.object({
    name: z.string(),
    calories: z.number().min(0),
    protein: z.number().min(0),
    carbs: z.number().min(0),
    fat: z.number().min(0),
    fiber: z.number().min(0),
  })

  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: '',
      calories: 0,
      protein: 0,
      carbs: 0,
      fat: 0,
      fiber: 0,
    },
  })
  //TODO: somehow move usePhoto inside onSubmit so it doesnt  keep calling the API
  const newItemName = getValues('name')
  const { url, user, error } = usePhoto(newItemName)

  const onSubmit = (formValues: FormData, e: any) => {
    const newTotal: foodItem = {
      name: formValues.name,
      calories: formValues.calories! + dayTotal.calories!,
      protein: formValues.protein! + dayTotal.protein!,
      carbs: formValues.carbs! + dayTotal.carbs!,
      fat: formValues.fat! + dayTotal.fat!,
      fiber: formValues.fiber! + dayTotal.fiber!,
      img: '',
      imgAuthor: '',
    }

    setDayTotal(newTotal)

    if (saveTemplate && formValues.name.length > 0) {
      const newItem = { ...formValues, img: url!, imgAuthor: user! }
      addItem(newItem)

      if (error) {
        //Notifies if unsplash api fails to get image(e.g rate limit exceeded leading to 401)
        notifications.show({
          message: `${error.status}: ${error.response?.message} - using fallback image`,
          color: 'yellow',
          autoClose: 2000,
          icon: <AlertCircle />,
          sx: { backgroundColor: 'yellowgreen' },
        })
      }

      notifications.show({
        message: `${formValues.name} added to database`,
        color: 'green',
        autoClose: 2000,
        icon: <CheckCircle2 />,
        sx: { backgroundColor: 'lightgreen' },
      })
    } else {
      if (
        // Returns true if at least one value is > 0
        // Prevents toast from showing if everything is 0
        // Not sure about the TS error, it works
        Object.values(formValues)
          .slice(1)
          .some((element) => Number(element) > 0)
      ) {
        notifications.show({
          message: 'Macros added to daily total',
          color: 'green',
          autoClose: 2000,
          icon: <CheckCircle2 />,
          sx: { backgroundColor: 'lightgreen' },
        })
      }
    }
    reset()
  }

  const onCheckBoxChange = (e: any) => {
    setSaveTemplate(!saveTemplate)
  }
  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="m-2 flex max-w-xs flex-col items-center gap-2 rounded-lg bg-gradient-to-br from-sky-900 to-sky-950 p-3"
      >
        <Title order={3} weight="semibold">
          Manual Input
        </Title>
        <div className="flex flex-col items-start">
          <label className="text-xs">Calories</label>
          <input
            type="number"
            placeholder="Calories"
            {...register('calories', {
              valueAsNumber: true,
            })}
            className={inputStyle}
          />
          {errors.calories && (
            <p className={errorStyle}>{errors.calories.message}</p>
          )}
        </div>
        <div className="flex flex-col items-start">
          <label className="text-xs">Protein</label>
          <input
            type="number"
            placeholder="Protein"
            {...register('protein', { valueAsNumber: true })}
            className={inputStyle}
          />
          {errors.protein && (
            <p className={errorStyle}>{errors.protein.message}</p>
          )}
        </div>
        <div className="flex flex-col items-start">
          <label className="text-xs">Carbs</label>
          <input
            type="number"
            placeholder="Carbs"
            {...register('carbs', { valueAsNumber: true })}
            className={inputStyle}
          />
          {errors.carbs && <p className={errorStyle}>{errors.carbs.message}</p>}
        </div>
        <div className="flex flex-col items-start">
          <label className="text-xs">Fat</label>
          <input
            type="number"
            placeholder="Fat"
            {...register('fat', { valueAsNumber: true })}
            className={inputStyle}
          />
          {errors.fat && <p className={errorStyle}>{errors.fat.message}</p>}
        </div>
        <div className="flex flex-col items-start">
          <label className="text-xs">Fiber</label>
          <input
            type="number"
            placeholder="Fiber"
            {...register('fiber', { valueAsNumber: true })}
            className={inputStyle}
          />
          {errors.fiber && <p className={errorStyle}>{errors.fiber.message}</p>}
        </div>
        <div className="flex items-start gap-2">
          <label className="text-xs">Add to database</label>
          <input
            type="checkbox"
            onChange={onCheckBoxChange}
            checked={saveTemplate}
          />
        </div>

        {saveTemplate && (
          <div className="flex flex-col items-start">
            <label className="text-xs">Name</label>
            <input
              type="string"
              placeholder="Name"
              {...register('name')}
              className={inputStyle}
            />
            {errors.name && (
              <p className={errorStyle}>{errors.name?.message}</p>
            )}
          </div>
        )}

        <Button type="submit" text="Input" icon={<Plus />} id="submitbtn" />
      </form>
    </>
  )
}

export default ManualInputForm
