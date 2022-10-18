import styled from 'styled-components'
import { COLORS, percentToHex } from '@/styles'

export const Footer = styled.footer`
  position: relative;
  width: 100%;
  height: auto;
  min-height: 180px;
  margin-top: 2rem;
  background-color: ${COLORS.secondary};

  padding: 2rem;
  color: ${COLORS.primary};
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  overflow: hidden;
  box-shadow: 0px -6px 20px 0px #0000002e;

  &::before {
    content: '';
    width: 100%;
    height: 189%;
    position: absolute;
    bottom: 0;
    right: 0;
    background-image: url(/images/natiapps-logo.png);
    background-size: contain;
    background-repeat: repeat;
    background-position: center;
    transform: rotate(163deg);
    opacity: 0.04;
  }

  & > * {
    position: relative;
  }

  & > *:first-child {
    text-align: center;
  }

  .copyright {
    text-align: center;
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 0.5rem;
    opacity: 0.7;
    background-color: ${COLORS.secondary}${percentToHex(50)};
    font-size: 0.7rem;
  }
`

export const Socials = styled.div`
  a {
    color: ${COLORS.primary};
    text-decoration: underline;
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem;
  }
`
