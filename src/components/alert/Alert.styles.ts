import { BORDER_RADIUS, COLORS } from '@/styles'
import styled from 'styled-components'

export const Alert = styled.div`
  width: 100%;
  padding: 1rem 2rem;
  border-radius: ${BORDER_RADIUS};
  position: relative;
  transition: background color 0.3s;
  box-sizing: border-box;

  & .close {
    height: 40px;
    width: 40px;
    position: absolute;
    top: 0.4rem;
    right: 0.4rem;
    background-color: transparent;
    /* padding: .4rem; */
    border: none;
    color: ${COLORS.light};
    opacity: 0.3;
    font-size: 2rem;
    transition: opacity 0.2s;
    cursor: pointer;
    border-radius: ${BORDER_RADIUS};

    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      opacity: 0.6;
    }
  }

  & h3,
  & h4,
  & h5 {
    font-size: 1.2rem;
    font-weight: bold;
  }

  &.alert--info {
    border: 1px solid ${COLORS.primary};
    background-color: ${COLORS.secondary};
    color: ${COLORS.primary};
  }

  &.alert--danger {
    background-color: ${COLORS.error};
    color: ${COLORS.light};
  }

  &.alert--warning {
    border: 1px solid ${COLORS.primary};
    background-color: ${COLORS.warning};
    color: ${COLORS.primary};
  }
`
