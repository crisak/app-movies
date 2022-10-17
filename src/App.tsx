import { ErrorProvider, Movies } from '@/components'

function App() {
  return (
    <ErrorProvider>
      <Movies />
    </ErrorProvider>
  )
}

export default App
