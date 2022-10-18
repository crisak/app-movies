import { ErrorProvider, Footer, Layout, ScrollProvider } from '@/components'
import { Home } from '@/pages'
import { Background, Main } from '@/styles'

function App() {
  return (
    <ScrollProvider>
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
    </ScrollProvider>
  )
}

export default App
