import { renderHook, waitFor } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { useFetch } from './useFetch'

describe('useFetch', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('starts with loading state', () => {
    const fetcher = vi.fn(() => new Promise(() => {}))

    const { result } = renderHook(() => useFetch(fetcher))

    expect(result.current.loading).toBe(true)
    expect(result.current.error).toBe(null)
    expect(result.current.data).toBe(null)
  })

  it('sets data when the fetcher resolves successfully', async () => {
    const mockData = [{ id: 1, title: 'Product test' }]
    const fetcher = vi.fn().mockResolvedValue(mockData)

    const { result } = renderHook(() => useFetch(fetcher))

    await waitFor(() => {
      expect(result.current.loading).toBe(false)
    })

    expect(result.current.data).toEqual(mockData)
    expect(result.current.error).toBe(null)
  })

  it('sets error when the fetcher rejects', async () => {
    const fetcher = vi.fn().mockRejectedValue(new Error('Request failed'))

    const { result } = renderHook(() => useFetch(fetcher))

    await waitFor(() => {
      expect(result.current.loading).toBe(false)
    })

    expect(result.current.data).toBe(null)
    expect(result.current.error).toBe('Request failed')
  })
})
