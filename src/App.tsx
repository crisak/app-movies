import { useState, type ChangeEventHandler } from 'react'
import { moviesService } from '@/services'
import { useFetch } from '@/hooks'
import ErrorProvider from '@/components/error-provider'

let yearInit = 2010
const optionsFilter = new Array(12).fill(true).map((_) => String(yearInit++))
const yearDefault = '2020'

function App() {
  const [filterValue, setFilterValue] = useState(yearDefault)
  const {
    data: movies,
    loading,
    refresh
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

  return (
    <ErrorProvider>
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

        <>
          {loading && (
            <div className="loading" data-testid="test-loading">
              Loading ...
            </div>
          )}
        </>

        <ul>
          {(movies || []).map((movie) => (
            <li key={movie.id}>
              <span>{movie.name} | </span>
              <span>{movie.year} | </span>
              <span>{movie.category} | </span>
              <span>{movie.imagePoster} </span>
              <span>
                <img src={movie.imagePoster} alt={movie.name} />
                zR
              </span>
            </li>
          ))}
        </ul>
      </>
    </ErrorProvider>
  )
}

export default App
