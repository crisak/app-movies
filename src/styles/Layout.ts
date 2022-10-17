import styled from 'styled-components'

export const Layout = styled.div`
  min-height: 100%;
  display: grid;
  grid-template-rows: 1fr auto;
  min-height: 100vh;

  footer {
    grid-row-start: 2;
    grid-row-end: 3;
  }
`
