import { useState } from 'react'
import { useForm } from 'react-hook-form'
import Button from './Button'
import { foodItem } from '../../types/types'
import { z, ZodType } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { readAll, readItem } from '../utils/useDatabase'
import ResultsDisplay from './ResultsDisplay'
import { Search } from 'lucide-react'
import { Loader } from '@mantine/core'

type FormData = {
  query: string
}

function SearchForm() {
  const [matchingResults, setMatchingResults] =
    useState<Array<foodItem> | null>([])
  const [showResults, setShowResults] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)

  const schema: ZodType<FormData> = z.object({
    query: z.string(),
  })

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      query: '',
    },
  })

  const handleDisplayResults = () => {
    if (showResults) {
      return loading ? <Loader /> : <ResultsDisplay results={matchingResults} />
    }
  }

  const onSubmit = (input: FormData, e: any) => {
    setLoading(true)
    readItem(input.query)
      .then((res) => {
        setLoading(false)
        setMatchingResults(res)
      })
      .finally(() => {
        reset()
        setShowResults(true)
      })
  }

  const showAll = () => {
    setShowResults(!showResults)
    if (matchingResults?.length == 0) {
      setLoading(true)
      readAll().then((res) => {
        setLoading(false)
        setMatchingResults(res)
      })
    } else {
      setMatchingResults(null)
    }
  }
  return (
    <div className="flex flex-col flex-wrap items-center ">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="m-2 flex max-w-xs flex-col items-center gap-2 rounded-lg bg-gradient-to-br from-sky-900 to-sky-950 p-3"
      >
        <div className="flex flex-col items-center">
          <label className="text-xs">Search Term</label>
          <input
            type="string"
            placeholder=""
            {...register('query')}
            className="m-1 rounded-lg bg-gray-300 p-1 text-sky-600"
          />
          {errors.query && (
            <p className="mt-1 self-center text-sm text-red-600">
              {errors.query.message}
            </p>
          )}
        </div>
        <Button
          text="Search  Database"
          type="submit"
          icon={<Search />}
          aria-disabled={loading}
          disabled={loading}
        />
        <Button
          text="Show all"
          onClick={showAll}
          aria-disabled={loading}
          disabled={loading}
        />
      </form>
      {handleDisplayResults()}
    </div>
  )
}

export default SearchForm
