import { ErrorProvider, Footer } from '@/components'
import { Home } from '@/pages'
import { Background, Main, Layout } from '@/styles'

function App() {
  return (
    <ErrorProvider>
      <Background>
        <Layout>
          <Main>
            <Home />
          </Main>
          <Footer />
        </Layout>
      </Background>
    </ErrorProvider>
  )
}

export default App
