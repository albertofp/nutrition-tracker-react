import { useState } from 'react'
import { createApi } from 'unsplash-js'
import { ApiResponse } from 'unsplash-js/dist/helpers/response'
import { photos, users } from 'unsplash-js/dist/internals'
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

const accessKey = import.meta.env.VITE_UNSPLASH_API_KEY as string
const unsplashApi = createApi({ accessKey })

export default function usePhoto(query: string) {
	const [data, setPhotosResponse] = useState<null | ApiResponse<Photos>>(null)

	unsplashApi.search
		.getPhotos({ query: query, orientation: 'landscape', perPage: 1 })
		.then((result) => {
			setPhotosResponse(result)
		})
		.catch((error) => console.error('error getting photo: ', error))

	const photo = data?.response?.results[0]

	return {
		url: photo?.urls.regular,
		user: photo?.user.name
	}
}

