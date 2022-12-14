import { Footer as FooterCustom, Socials } from './Footer.styles'
import { Linkedin, Envelope, Github } from 'react-bootstrap-icons'
import { Container } from '@/styles'

const Footer = () => {
  return (
    <FooterCustom>
      <div>
        <img
          src="/images/natiapps-logo.png"
          alt="Logo de NativApps"
          width={50}
          height={50}
        />
        <h4>NativApps Movies</h4>
      </div>
      <Socials>
        <h2>Cristian Romero</h2>
        <a
          href="https://www.linkedin.com/in/cristian-romero-crisak/"
          target="_blank"
        >
          <Linkedin /> <span>Linkedin</span>
        </a>
        <a href="mailto:cristian.c.romero.p@gmail.com" target="_blank">
          <Envelope />
          <span>cristian.c.romero.p@gmail.com</span>
        </a>
        <a href="https://github.com/crisak" target="_blank">
          <Github />
          <span>Github</span>
        </a>
      </Socials>
      <div className="copyright">
        <Container>©2022 by Crisak</Container>
      </div>
    </FooterCustom>
  )
}

export default Footer
