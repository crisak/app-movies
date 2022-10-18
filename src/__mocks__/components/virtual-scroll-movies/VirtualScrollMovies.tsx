import { MovieDto } from '@/dtos'
import { ImageAlt } from 'react-bootstrap-icons'

type VirtualScrollMoviesPros<T = any> = { rows: T[] }

function VirtualScrollMovies({ rows }: VirtualScrollMoviesPros<any>) {
  const displayImage = (image: string, name: string) => {
    if (!image) {
      return (
        <div>
          <ImageAlt size={300} />
        </div>
      )
    }
    return <img src={image} alt={`Image de ${name}`} />
  }

  return (
    <>
      {[...Array(rows.length)].map((_, index) =>
        rows[index].map((movie: MovieDto) => (
          <div key={movie.id}>
            <div>{movie.category}</div>
            {displayImage(movie.imagePoster, movie.name)}
            <div className="detail">
              <h3 data-testid="movies-title">{movie.name}</h3>
              <span className="year">{movie.year}</span>
            </div>
          </div>
        ))
      )}
    </>
  )
}

export default VirtualScrollMovies
