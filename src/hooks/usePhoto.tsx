import { useState } from 'react'
import { createApi } from 'unsplash-js'
import { ApiResponse } from 'unsplash-js/dist/helpers/response'
import { Photos } from 'unsplash-js/dist/methods/search/types/response'

const accessKey = import.meta.env.VITE_UNSPLASH_KEY as string
const unsplashApi = createApi({
  accessKey: accessKey,
})

export default function usePhoto(query: string) {
  const [data, setData] = useState<null | ApiResponse<Photos>>(null)
  const [unsplashError, setUnsplashError] = useState<null | ApiResponse<Error>>(
    null
  )
  const [fallback, setFallback] = useState(false)

  const fallbackURL =
    'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80'
  const fallbackUser = 'Milad Fakurian'

  unsplashApi.search
    .getPhotos({ query: query, orientation: 'landscape', perPage: 1 })
    .then((result) => {
      if (result.type == 'error' || result.response.total == 0) {
        setFallback(true)
        result.errors && setUnsplashError(result)
        unsplashApi.photos.trackDownload({
          downloadLocation:
            'https://unsplash.com/photos/T6hvDcE7pDs/download?ixid=MnwxMjA3fDB8MXxhbGx8MXx8fHx8fDJ8fDE2ODMwMzc5NDc&force=true&w=1920',
        })
      } else {
        setData(result)
        //Tracks image download event in accordance to guidelines:
        //
        //https://help.unsplash.com/en/articles/2511258-guideline-triggering-a-download
        unsplashApi.photos.trackDownload({
          downloadLocation: result.response.results[0].links.download_location,
        })
      }
    })
    .catch((error) => console.error('error getting photo: ', error))

  if (fallback)
    return { url: fallbackURL, user: fallbackUser, error: unsplashError }
  else
    return {
      url: data?.response?.results[0]?.urls.regular,
      user: data?.response?.results[0]?.user?.name,
      //user: data?.response?.results[0].user,
      error: unsplashError,
    }
}
