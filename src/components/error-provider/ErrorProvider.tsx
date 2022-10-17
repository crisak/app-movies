import { createContext, useState } from 'react'
import { Button, ContainerError, DetailError } from './ErrorProvider.styles'
/** Provider */
const defaultState = {
  error: null as unknown,
  message: '',
  visible: false
}

type ProviderState = typeof defaultState

/** Context */

export type ErrorContextProps = {
  error: unknown
  message: string
  visible: false
  hideError: () => void
  showError: (error: Omit<ProviderState, 'visible'>) => void
}

export const ErrorContext = createContext<ErrorContextProps>({
  error: null as unknown,
  message: '',
  visible: false,
  hideError: () => {},
  showError: () => {}
})

const ErrorProvider = ({
  children
}: {
  children: JSX.Element | JSX.Element[]
}) => {
  const [error, setError] = useState<ProviderState>(defaultState)

  const hideError = () => {
    setError(defaultState)
  }

  const showError = (error: Omit<ProviderState, 'visible'>) => {
    setError({
      ...error,
      visible: true
    })
  }

  const displayError = () => {
    if (!error.error) {
      return null
    }
    return (
      <DetailError>
        <details>
          <summary>Ver más detelles</summary>

          <pre>{error.error ? JSON.stringify(error.error, null, 2) : null}</pre>
        </details>
      </DetailError>
    )
  }

  const displayMessageError = () => {
    if (!error.visible) {
      return null
    }

    return (
      <ContainerError>
        {error.message}
        {displayError()}
        <Button onClick={hideError}>Aceptar</Button>
      </ContainerError>
    )
  }

  const data = { ...error, hideError, showError } as ErrorContextProps

  return (
    <ErrorContext.Provider value={data}>
      {children}
      {displayMessageError()}
    </ErrorContext.Provider>
  )
}

export default ErrorProvider
