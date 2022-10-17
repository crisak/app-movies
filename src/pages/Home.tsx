import { Helmet } from 'react-helmet'
import { Movies } from '@/components'
import { Header } from '@/styles'

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home | Movies</title>
        <meta name="description" content="Prueba técnica de NativApps" />
      </Helmet>
      <Header>
        <img
          src="/src/assets/natiapps-logo.png"
          alt="Logo de NativApps"
          width={80}
          height={80}
        />
        <h1>NativApps Movies</h1>
      </Header>
      <Movies />
    </>
  )
}

export default Home
