import { useState } from 'react'
import { createApi } from 'unsplash-js'
import { ApiResponse } from 'unsplash-js/dist/helpers/response'
import { Photos } from 'unsplash-js/dist/methods/search/types/response'

type Photo = {
	id: number
	width: number
	height: number
	urls: { large: string; regular: string; raw: string; small: string }
	color: string | null
	user: {
		username: string
		name: string
	}
}

const accessKey = import.meta.env.VITE_UNSPLASH_KEY as string
const unsplashApi = createApi({
	accessKey: accessKey
})

export default function usePhoto(query: string) {
	const [data, setData] = useState<null | ApiResponse<Photos>>(null)
	const [unsplashError, setUnsplashError] = useState<null | ApiResponse<Error>>(
		null
	)
	const [fallback, setFallback] = useState(false)

	/*
	axios
		.get(`https://api.unsplash.com/search/photos?page=1`, {
			params: { query: query, orientation: 'landscape' },
			headers: {
				Authorization: `CLIENT-ID ${accessKey}`
			}
		})
		.then((response) => setData(response.data))
		.catch((error) => console.error('error getting photo: ', error))
*/

	unsplashApi.search
		.getPhotos({ query: query, orientation: 'landscape', perPage: 1 })
		.then((result) => {
			if (result.type == 'error') {
				setFallback(true)
				setUnsplashError(result)
			} else {
				setData(result)
			}
		})
		.catch((error) => console.error('error getting photo: ', error))

	const response = fallback
		? {
				url: 'https://images.unsplash.com/photo-1487147264018-f937fba0c817?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max',
				user: 'Mona Eendra',
				error: unsplashError
		  }
		: {
				url: data?.response?.results[0]?.urls.regular,
				user: data?.response?.results[0]?.user.name,
				error: unsplashError
		  }
	return response
}
