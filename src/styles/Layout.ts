import styled from 'styled-components'
import { COLORS } from './variables'
import { percentToHex } from './mix'

export const Layout = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${COLORS.secondary};
  color: ${COLORS.light};
  overflow: hidden;

  position: relative;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  -o-transform: translateZ(0);
  transform: translateZ(0);

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
      to top right,
      ${COLORS.info}${percentToHex(20)} 0%,
      ${COLORS.dark}${percentToHex(50)} 55%,
      ${COLORS.primary}${percentToHex(20)} 100%
    );

    -webkit-filter: blur(50px);
    -o-filter: blur(50px);
    filter: blur(50px);
    filter: progid: DXImageTransform.Microsoft.Blur(PixelRadius='70');
    top: -70px;
    right: -70px;
    left: -70px;
    padding: 70px;
  }
`
