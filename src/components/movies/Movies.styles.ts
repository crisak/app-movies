import styled from 'styled-components'
import { COLORS, percentToHex, borderRadius } from '@/styles'

const widthCard = '300px'

export const ContainerMovies = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 300px);
  justify-content: space-evenly;
  gap: 2rem;
`

export const CardMovie = styled.article`
  position: relative;
  display: flex;
  height: 400px;
  width: ${widthCard};
  border-radius: ${borderRadius};
  overflow: hidden;
  border: 1px solid ${COLORS.primary};

  &:hover {
    .detail {
      background-color: ${COLORS.primary}${percentToHex(95)};
    }

    img {
      filter: brightness(1);
      transform: scale(1.1);
    }
  }
`

export const Image = styled.img`
  border-radius: ${borderRadius};
  height: 400px;
  width: 100%;
  object-fit: cover;
  object-position: top;
  transition: all 0.3s;
  filter: brightness(0.7);
`

export const Detail = styled.div`
  box-sizing: border-box;

  border-end-start-radius: ${borderRadius};
  border-bottom-right-radius: ${borderRadius};
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  max-height: 100px;
  text-align: center;
  color: ${COLORS.secondary};
  padding: 1rem;
  background-color: ${COLORS.primary}${percentToHex(90)};
  transition: background 0.3s;

  & > * {
    position: relative;
  }

  h3 {
    padding: 0;
    margin: 0;
  }
  .year {
    font-size: 0.8rem;
    opacity: 0.8;
  }
`

export const Category = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  border-top-right-radius: ${borderRadius};
  border-bottom-left-radius: ${borderRadius};

  background-color: ${COLORS.secondary}${percentToHex(90)};
  border: 1px solid ${COLORS.primary};
  color: ${COLORS.light};
  padding: 0.5rem;
  z-index: 1;
`
