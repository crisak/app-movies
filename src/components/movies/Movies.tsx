import { ChangeEventHandler, useState } from 'react'
import { moviesService } from '@/services'
import { useFetch } from '@/hooks'
import { MovieDto } from '@/dtos'

let yearInit = 2010
const optionsFilter = new Array(12).fill(true).map((_) => String(yearInit++))
const yearDefault = '2020'

const Movies = () => {
  const [filterValue, setFilterValue] = useState(yearDefault)
  const {
    data: movies = [],
    loading,
    refresh
  } = useFetch<MovieDto[]>(() => {
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

      {loading && (
        <div className="loading" data-testid="test-loading">
          Loading ...
        </div>
      )}

      {movies && (
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>
              <span data-testid="movies-title">{movie.name} | </span>
              <span>{movie.year} | </span>
              <span>{movie.category} | </span>
              <span>{movie.imagePoster} </span>
              <span>
                <img src={movie.imagePoster} alt={`Image de ${movie.name}`} />
              </span>
            </li>
          ))}
        </ul>
      )}
    </>
  )
}

export default Movies
