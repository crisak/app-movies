import { useScrollProvider } from '@/components'
import { LayoutStyled } from './Layout.styles'

const Layout = ({ ...props }) => {
  const { refElement } = useScrollProvider()

  return <LayoutStyled ref={refElement} {...props} />
}

export default Layout
