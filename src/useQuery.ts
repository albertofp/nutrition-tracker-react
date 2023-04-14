import axios from 'axios'
import { useState } from 'react'

export default function useQuery<T>() {
	const [data, setData] = useState(null)
	const [error, setError] = useState<null | unknown>(null)
	const [loading, setLoading] = useState(false)

	const query = async (term: string) => {
		setError(null)
		setLoading(true)
		try {
			term = term.replace(/\s/g, '&20')
			const response = await axios.get(term)
			setData(response.data)
		} catch (error) {
			setError(error)
		}
		setLoading(false)
	}

	return {
		data,
		error,
		loading,
		query
	}
}
