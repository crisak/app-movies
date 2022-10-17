import { borderRadius, COLORS } from '@/styles'
import styled from 'styled-components'

export const Select = styled.select`
  padding: 0.5rem 1rem;
  border: 1px solid ${COLORS.primary};
  background-color: transparent;
  color: ${COLORS.primary};
  border-radius: ${borderRadius};
  width: 100%;
`
