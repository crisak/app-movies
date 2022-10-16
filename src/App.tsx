import { useEffect, useState, type ChangeEventHandler } from 'react'
import { moviesService } from '@/services'
import { MovieDto } from '@/dtos'

let yearInit = 2010
const optionsFilter = new Array(12).fill(true).map((_) => String(yearInit++))
const yearDefault = '2020'

function App() {
  const [movies, setMovies] = useState<MovieDto[]>([])
  const [filterValue, setFilterValue] = useState(yearDefault)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const getMovies = async () => {
    try {
      const result = await moviesService.getAll(filterValue)
      setMovies(result)
    } catch (error) {
      console.error(error)
      setError('Error al obtener listado. Intente nuevamente')
    } finally {
      setLoading(false)
    }
  }

  const onChangeFilter: ChangeEventHandler<HTMLSelectElement> = (event) => {
    const value = event.currentTarget.value
    setFilterValue(value)
  }

  const handleCloseErrorAlert = () => {
    setError('')
  }

  useEffect(() => {
    getMovies()
  }, [filterValue])

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
          {error}
          <button onClick={handleCloseErrorAlert}>Aceptar</button>
        </div>
      )}

      {loading && (
        <div className="loading" data-testid="test-loading">
          Loading ...
        </div>
      )}

      <ul>
        {movies.map((movie) => (
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
