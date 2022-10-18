import { useVirtualizer } from '@tanstack/react-virtual'
import {
  Column,
  Category,
  Detail,
  Image,
  PreviewImage,
  ContainerMovies,
  Row
} from './Movies.styles'
import { ImageAlt } from 'react-bootstrap-icons'
import { useScrollProvider } from '@/components'
import { MovieDto } from '@/dtos'

type VirtualScrollMoviesPros<T = any> = { rows: T[] }

function VirtualScrollMovies({ rows }: VirtualScrollMoviesPros<any>) {
  const { refElement: parentRef } = useScrollProvider()

  const rowVirtualizer = useVirtualizer({
    count: rows.length,
    getScrollElement: () => parentRef?.current,
    estimateSize: () => 400
  })

  const displayImage = (image: string, name: string) => {
    if (!image) {
      return (
        <PreviewImage>
          <ImageAlt size={300} />
        </PreviewImage>
      )
    }
    return <Image src={image} alt={`Image de ${name}`} />
  }

  return (
    <>
      <ContainerMovies
        style={{
          height: rowVirtualizer.getTotalSize()
        }}
      >
        {rowVirtualizer.getVirtualItems().map((virtualRow) => (
          <Row
            ref={virtualRow.measureElement}
            key={virtualRow.index}
            style={{
              transform: `translateY(${virtualRow.start}px)`
            }}
          >
            {rows[virtualRow.index].map((movie: MovieDto) => (
              <Column key={movie.id}>
                <Category>{movie.category}</Category>
                {displayImage(movie.imagePoster, movie.name)}
                <Detail className="detail">
                  <h3 data-testid="movies-title">{movie.name}</h3>
                  <span className="year">{movie.year}</span>
                </Detail>
              </Column>
            ))}
          </Row>
        ))}
      </ContainerMovies>
    </>
  )
}

export default VirtualScrollMovies
