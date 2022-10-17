import { ErrorProvider } from '@/components'
import { Home } from '@/pages'
import { Footer } from '@/components'
import { Layout, Main } from './styles'

function App() {
  return (
    <ErrorProvider>
      <Layout>
        <Main>
          <Home />
          <Footer />
        </Main>
      </Layout>
    </ErrorProvider>
  )
}

export default App
