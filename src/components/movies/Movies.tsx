import { moviesService } from '@/services'
import { useFetch } from '@/hooks'
import { MovieDto } from '@/dtos'
import { Container } from '@/styles'
import {
  CardMovie,
  Category,
  ContainerMovies,
  Detail,
  Image
} from './Movies.styles'
import { Loading, FilterMovies } from '@/components'

const Movies = () => {
  const {
    data: movies = [],
    loading,
    refresh
  } = useFetch<MovieDto[]>(() => {
    return moviesService.getAll('2020')
  })

  const refreshRequest = (yearFilter: string) => {
    refresh(() => {
      return moviesService.getAll(yearFilter)
    })
  }

  return (
    <Container>
      <FilterMovies onChange={refreshRequest} />

      <Loading position="center" data-testid="test-loading" loading={loading} />

      {movies && (
        <ContainerMovies>
          {movies.map((movie) => (
            <CardMovie key={movie.id}>
              <Category>{movie.category}</Category>
              <Image src={movie.imagePoster} alt={`Image de ${movie.name}`} />
              <Detail className="detail">
                <h3 data-testid="movies-title">{movie.name}</h3>
                <span className="year">{movie.year}</span>
              </Detail>
            </CardMovie>
          ))}
        </ContainerMovies>
      )}
    </Container>
  )
}

export default Movies
