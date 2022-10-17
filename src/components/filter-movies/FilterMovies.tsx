import { ContainerFilter } from './FilterMovies.styles'
import { Select } from '@/components'
import { ChangeEventHandler, useState } from 'react'

type FilterMoviesProps = {
  onChange: (year: string) => void
}

const yearDefault = '2020'

let yearInit = 2010
const optionsFilter = new Array(12).fill(true).map((_) => {
  const year = String(yearInit++)
  return { label: year, value: year }
})

const FilterMovies = ({ onChange }: FilterMoviesProps) => {
  const [filterValue, setFilterValue] = useState(yearDefault)

  const onChangeFilter: ChangeEventHandler<HTMLSelectElement> = (event) => {
    const value = event.currentTarget.value
    setFilterValue(value)
    onChange(value)
  }
  return (
    <ContainerFilter>
      <label htmlFor="filterYear">Año</label>
      <br />
      <Select
        name="filterYear"
        id="filterYear"
        value={filterValue}
        onChange={onChangeFilter}
        options={optionsFilter}
      />
    </ContainerFilter>
  )
}

export default FilterMovies
