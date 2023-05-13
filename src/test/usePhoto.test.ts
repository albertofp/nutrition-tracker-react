import { renderHook, waitFor } from '@testing-library/react'
import usePhoto from '../hooks/usePhoto'

describe('usePhoto', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('fallback test', async () => {
    const data = renderHook(() =>
      usePhoto('asdvasldkvjasdvnasvnalskdjvnasdkvjn')
    )

    await waitFor(() => {
      expect(data.result.current.user).toBe('Mona Eendra')
      expect(data.result.current.url).toBe(
        'https://images.unsplash.com/photo-1502621066348-0e0b0a6d35c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
      )
    })
  })
})
