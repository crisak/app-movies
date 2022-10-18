import { moviesService } from '@/services'
import { useFetch } from '@/hooks'
import { MovieDto } from '@/dtos'
import { Container } from '@/styles'
import { Loading, FilterMovies, Alert, VirtualScrollMovies } from '@/components'
import { useEffect, useMemo, useState } from 'react'

const Movies = () => {
  const {
    data: movies = [],
    loading,
    refresh
  } = useFetch<MovieDto[]>(() => {
    return moviesService.getAll('2020')
  })

  const [alert, setState] = useState(false)

  const refreshRequest = (yearFilter: string) => {
    refresh(() => {
      return moviesService.getAll(yearFilter)
    })
  }

  const handleCloseAlert = () => {
    setState(false)
  }

  const virtualMovies = useMemo(() => {
    if (!movies || movies.length === 0) {
      return []
    }

    const byGroups = 4

    const totalGroups = Math.ceil(movies.length / byGroups)
    return [...Array(totalGroups)].map((_, index) => {
      const endIndex: number = (index + 1) * byGroups
      const startIndex: number = endIndex - byGroups
      return movies.slice(startIndex, endIndex)
    })
  }, [movies])

  useEffect(() => {
    if (!movies || movies?.length === 0) {
      setState(true)
    } else {
      setState(false)
    }
  }, [movies])

  return (
    <>
      <Container>
        <FilterMovies onChange={refreshRequest} />

        <Loading
          position="center"
          data-testid="test-loading"
          loading={loading}
        />

        <Alert visible={alert} variant="info" onClose={handleCloseAlert}>
          <h3>Sin resultados</h3>
          <p>Intente con otra fecha</p>
        </Alert>
      </Container>

      {virtualMovies.length > 0 && (
        <VirtualScrollMovies rows={virtualMovies || []} />
      )}
    </>
  )
}

export default Movies
