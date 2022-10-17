import { borderRadius, COLORS, percentToHex } from '@/styles'
import styled from 'styled-components'

export const ContainerError = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  margin: auto 1.5rem 1.5rem 1.5rem;
  max-width: 300px;
  width: 100%;
  background-color: ${COLORS.error};
  color: ${COLORS.light};
  border-radius: ${borderRadius};
  padding: 1rem;
  box-shadow: 1px 2px 40px #00000073;
  box-sizing: border-box;
`

export const Button = styled.button`
  background-color: transparent;
  border-radius: ${borderRadius};
  padding: 0.5rem 0.8rem;
  border: 1px solid ${COLORS.light};
  color: ${COLORS.light};
  float: right;
  transition: all 0.4s;

  &:hover {
    background-color: ${COLORS.light};
    color: ${COLORS.error};
    border: 1px solid ${COLORS.error};
    cursor: pointer;
  }
`

export const DetailError = styled.div`
  color: ${COLORS.light}${percentToHex(70)};
  font-size: 0.8rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
`
