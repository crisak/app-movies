import { useError } from '@/components/error-provider'
import { useEffect, useRef, useState } from 'react'

type UseFetchProps<T> = () => Promise<T>

function useFetch<Response = null>(requestFn: UseFetchProps<Response>) {
  const [data, setData] = useState<Response | null>(null)
  const [loading, setLoading] = useState(true)
  const isMount = useRef(true)
  const { showError } = useError()

  const request = async (requestFnRefresh?: UseFetchProps<Response>) => {
    try {
      if (isMount.current) setLoading(true)

      let response: Response
      if (requestFnRefresh) {
        response = await requestFnRefresh()
      } else {
        response = await requestFn()
      }

      if (isMount.current) setData(response)
    } catch (error) {
      console.error(error)
      console.log('isMount.current', isMount.current)
      if (isMount.current) {
        showError({
          error: (error || null) as unknown,
          message: 'Error al obtener listado. Intente nuevamente'
        })
      }
    } finally {
      if (isMount.current) setLoading(false)
    }
  }

  const refresh = (requestFnRefresh?: UseFetchProps<Response>) => {
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
