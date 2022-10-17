import styled from 'styled-components'
import { COLORS } from '@/styles'

export const Footer = styled.footer`
  bottom: 0;
  margin-top: 2rem;
  background-color: ${COLORS.secondary};
  padding: 2rem;
  color: ${COLORS.primary};
  display: grid;
  grid-template-columns: minmax(300px, 1fr) minmax(300px, 1fr);
  & > *:first-child {
    text-align: center;
  }

  .socials {
    a {
      color: ${COLORS.primary};
      text-decoration: underline;
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-bottom: 1rem;
    }
  }
`
