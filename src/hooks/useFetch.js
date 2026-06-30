import { useEffect, useState } from 'react'

export function useFetch(fetcher) {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let isMounted = true

    async function loadData() {
      try {
        setLoading(true)
        setError(null)

        const result = await fetcher()

        if (isMounted) {
          setData(result)
        }
      } catch (requestError) {
        if (isMounted) {
          setData(null)
          setError(requestError.message || 'Unexpected error')
        }
      } finally {
        if (isMounted) {
          setLoading(false)
        }
      }
    }

    loadData()

    return () => {
      isMounted = false
    }
  }, [fetcher])

  return { data, error, loading }
}
