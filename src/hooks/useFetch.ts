import { useError } from '@/components/error-provider'
import { useEffect, useRef, useState } from 'react'

type UseFetchProps<T> = () => Promise<T>

function useFetch<T = null>(requestFn: UseFetchProps<T>) {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState(true)
  const isMount = useRef(true)
  const errorCtx = useError()

  const request = async (requestFnRefresh?: UseFetchProps<T>) => {
    try {
      let response: T
      if (requestFnRefresh) {
        response = await requestFnRefresh()
      } else {
        response = await requestFn()
      }

      if (isMount.current) setData(response)
    } catch (error) {
      console.error(error)
      if (isMount.current) {
        errorCtx?.showError({
          error: (error || null) as unknown,
          message: 'Error al obtener listado. Intente nuevamente'
        })
      }
    } finally {
      if (isMount.current) setLoading(false)
    }
  }

  const refresh = (requestFnRefresh?: UseFetchProps<T>) => {
    if (requestFnRefresh) {
      request(requestFnRefresh)
      return
    }

    request()
  }

  useEffect(() => {
    isMount.current = true
    request()

    return () => {
      isMount.current = false
    }
  }, [])

  return { data, loading, refresh }
}

export default useFetch
