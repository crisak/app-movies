import { useEffect, useRef, useState, type ChangeEventHandler } from 'react'
import { moviesService } from '@/services'
import { MovieDto } from '@/dtos'

// [] create Error provider

type UseFetchProps<T> = () => Promise<T>

/** Custom hook */
function useFetch<T = null>(requestFn: UseFetchProps<T>) {
  const [data, setData] = useState<T | null>(null)
  const [error, setError] = useState<unknown>(null)
  const [loading, setLoading] = useState(true)
  const isMount = useRef(true)

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
      if (isMount.current) setError(error)
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

  const hideError = () => {
    setError(false)
  }

  useEffect(() => {
    request()

    return () => {
      isMount.current = false
    }
  }, [])

  return { data, error, loading, refresh, hideError }
}

let yearInit = 2010
const optionsFilter = new Array(12).fill(true).map((_) => String(yearInit++))
const yearDefault = '2020'

function App() {
  const [filterValue, setFilterValue] = useState(yearDefault)
  const {
    data: movies,
    loading,
    error,
    refresh,
    hideError
  } = useFetch(() => {
    return moviesService.getAll(filterValue)
  })

  const onChangeFilter: ChangeEventHandler<HTMLSelectElement> = (event) => {
    const value = event.currentTarget.value
    setFilterValue(value)
    refresh(() => {
      return moviesService.getAll(value)
    })
  }

  const handleCloseErrorAlert = () => {
    hideError()
  }

  return (
    <>
      <h1>NatiApps Movies</h1>
      <div className="filter">
        <label htmlFor="filterYear">Año</label>
        <select
          name="filterYear"
          id="filterYear"
          value={filterValue}
          onChange={onChangeFilter}
        >
          {optionsFilter.map((year) => (
            <option key={year} value={year}>
              - {year}
            </option>
          ))}
        </select>
      </div>

      {error && (
        <div className="alert-error">
          Error al obtener listado. Intente nuevamente
          <button onClick={handleCloseErrorAlert}>Aceptar</button>
        </div>
      )}

      {loading && (
        <div className="loading" data-testid="test-loading">
          Loading ...
        </div>
      )}

      <ul>
        {(movies || []).map((movie) => (
          <li key={movie.id}>
            <span>{movie.name} | </span>
            <span>{movie.year} | </span>
            <span>{movie.category} | </span>
            <span>{movie.imagePoster} </span>
            <span>
              <img src={movie.imagePoster} alt={movie.name} />{' '}
            </span>
          </li>
        ))}
      </ul>
    </>
  )
}

export default App
